// Supabase Edge Function: gemini-chat
// Deploy ke project kqneikpldbrspcxhktrn dan simpan GEMINI_API_KEY di Supabase Secrets.
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const CANDIDATE_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.1-flash-lite',
  'gemini-3.8-flash',
  'gemini-3-flash',
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GEMINI_API_KEY');
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_KEY belum diset di Supabase Secrets.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { prompt, systemInstruction } = await req.json();
    if (!prompt || typeof prompt !== 'string') {
      return new Response(JSON.stringify({ error: 'Prompt tidak valid.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const payload = {
      ...(systemInstruction ? { system_instruction: { parts: [{ text: systemInstruction }] } } : {}),
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 1200 },
    };

    let lastStatus = 0;
    let lastError = '';

    for (const model of CANDIDATE_MODELS) {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 12000);

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        clearTimeout(timer);

        if (res.ok) {
          const data = await res.json();
          const parts = data?.candidates?.[0]?.content?.parts || [];
          const reply = parts
            .filter((p: { thought?: boolean; text?: string }) => !p.thought && p.text)
            .map((p: { text?: string }) => p.text)
            .join('\n')
            .trim();
          if (reply) {
            return new Response(JSON.stringify({ reply, model }), {
              status: 200,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }
        } else {
          lastStatus = res.status;
          const errBody = await res.json().catch(() => ({}));
          lastError = errBody?.error?.message || res.statusText || 'Unknown error';
          if (res.status === 400 || res.status === 401 || res.status === 403) {
            break;
          }
        }
      } catch (fetchErr) {
        clearTimeout(timer);
        lastStatus = 504;
        lastError = fetchErr instanceof Error ? fetchErr.message : 'Timeout';
      }
    }

    return new Response(JSON.stringify({
      error: 'Semua model Gemini gagal merespons.',
      googleStatus: lastStatus,
      googleError: lastError,
    }), {
      status: 502,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err instanceof Error ? err.message : 'Server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
