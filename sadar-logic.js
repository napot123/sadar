/* 
   SADAR — Sarana Edukasi dan Deteksi Anti Narkoba
   Interactivity & Gemini AI Logic
   PjBL Kelas XI RPL
*/

(function () {
    'use strict';

    // ==========================================
    // 1. DATA ARTIKEL EDUKASI P4GN (dari html5up-editorial)
    // ==========================================
    const ARTIKEL_DATA = {
        'art-1': {
            ikon: '📚',
            judul: 'Mengenal Narkotika: Apa yang Perlu Kamu Tahu',
            sumber: 'Disarikan dari BNN.go.id',
            isi: [
                'Narkotika (Narkotika, Psikotropika, dan Zat Adiktif lainnya) adalah zat atau obat yang berasal dari tanaman atau bukan tanaman, baik sintetis maupun semi sintetis, yang dapat menyebabkan penurunan atau perubahan kesadaran, hilangnya rasa, mengurangi sampai menghilangkan rasa nyeri, dan dapat menimbulkan ketergantungan.',
                'Di Indonesia, penggunaan narkotika tanpa hak dan melawan hukum dilarang keras serta diatur secara tegas dalam Undang-Undang No. 35 Tahun 2009 tentang Narkotika.',
                'Penting dipahami oleh setiap remaja: tidak ada orang yang "mulai langsung dari kondisi berat". Penyalahgunaan umumnya berawal dari rasa penasaran yang keliru, ajakan atau tekanan teman sebaya (peer pressure), atau pelarian sesaat dari stres dan masalah keluarga/sekolah.',
                'Edukasi sejak dini adalah kunci perlindungan diri terbaik. Semakin kamu memahami risiko nyata dan cara kerja manipulatif dari zat-zat ini pada sistem saraf, semakin kuat daya tolak dan benteng pertahanan dirimu.',
                'Fakta penting dari BNN: pengguna narkotika yang melaporkan diri atau dilaporkan keluarganya berhak mendapatkan rehabilitasi medis dan sosial, bukan dipenjara. Pendekatan kemanusiaan berfokus pada pemulihan, bukan stigma!'
            ]
        },
        'art-2': {
            ikon: '🫀',
            judul: 'Dampak Penyalahgunaan bagi Kesehatan & Sosial',
            sumber: 'Disarikan dari Kementerian Kesehatan RI',
            isi: [
                'Menurut Kementerian Kesehatan Republik Indonesia, penyalahgunaan zat berbahaya dapat merusak struktur serta fungsi otak secara permanen — terutama area korteks prefrontal yang mengatur kemampuan berpikir rasional, pengendalian emosi, dan memori jangka panjang.',
                'Dampak fisik yang sangat berbahaya meliputi kerusakan organ vital (jantung, hati, ginjal, dan paru-paru), penurunan sistem kekebalan tubuh, hingga risiko fatal akibat penularan HIV/AIDS dan Hepatitis B/C melalui jarum suntik yang tidak steril.',
                'Secara psikologis, ketergantungan memicu kecemasan akut, depresi berat, paranoia, halusinasi, gangguan tidur kronis, hingga dorongan menyakiti diri sendiri.',
                'Dampak sosialnya pun tak kalah memilukan: prestasi sekolah menurun drastis, hilangnya rasa percaya dari keluarga, putusnya pertemanan yang sehat, hingga terjerat masalah hukum yang merusak masa depan.',
                'Kabar baiknya — pemulihan itu nyata dan mungkin diraih! Dengan dukungan medis profesional, konseling berkelanjutan, dan lingkungan keluarga yang penuh kasih tanpa menghakimi, ribuan penyintas berhasil pulih sepenuhnya.'
            ]
        },
        'art-3': {
            ikon: '🛡️',
            judul: 'Cara Mencegah Penyalahgunaan di Sekolah & Lingkungan',
            sumber: 'Disarikan dari BNN.go.id & Panduan P4GN',
            isi: [
                'Badan Narkotika Nasional (BNN) menekankan pencegahan berbasis lingkungan sebagai strategi utama P4GN (Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika). Lingkungan sekolah yang aman dan suportif menjadi garis pertahanan utama para pelajar.',
                'Keterampilan personal yang wajib dimiliki pelajar adalah sikap asertif: berani berkata "TIDAK" dengan tegas tanpa merasa canggung saat ditawari hal-hal yang mencurigakan. Kamu berhak menentukan masa depanmu sendiri.',
                'Pilihlah lingkaran pertemanan yang saling menginspirasi dan membangun. Salurkan energi serta kreativitas melalui hobi positif: olahraga, seni, ekstrakurikuler, dan komunitas belajar.',
                'Komunikasi yang hangat dan terbuka dalam keluarga juga terbukti ampuh mencegah anak terjerumus. Jika kamu sedang menghadapi beban berat, ceritakan kepada orang tua atau guru BK terpercaya.',
                'Jika kamu melihat ada indikasi peredaran atau teman yang mulai terpengaruh di sekolah, jangan ragu untuk berkoordinasi secara rahasia dengan pihak sekolah atau layanan resmi BNN.'
            ]
        },
        'art-4': {
            ikon: '🤝',
            judul: 'Mengenali Gejala Dini & Langkah Menolong Sahabat',
            sumber: 'Disarikan dari BNN & Kemkes RI',
            isi: [
                'Mengenali tanda-tanda awal perubahan perilaku pada sahabat sangat penting agar pertolongan tidak terlambat. Perhatikan gejala seperti: perubahan pola tidur yang drastis, mata merah/sayu, penurunan nafsu makan mendadak, serta menarik diri dari obrolan teman akrab.',
                'Perubahan emosi seperti mudah tersinggung, cemas berlebihan tanpa alasan, sering membolos, hingga kesulitan konsentrasi saat jam pelajaran juga merupakan tanda peringatan penting.',
                'Jika kamu melihat sahabatmu mengalami gejala ini, JANGAN sekali-kali menghakimi, memaki, apalagi menyebarkan gosip. Dekati mereka secara personal dengan penuh empati dan kasih sayang.',
                'Dengarkan keluh kesah mereka tanpa prasangka. Katakan bahwa kamu peduli dan ingin melihat mereka tetap sehat dan bahagia.',
                'Ajak sahabatmu secara bertahap untuk berbicara dengan Guru BK, dokter, atau konselor profesional. Keberanianmu mendampingi sahabat bisa menyelamatkan jalan hidupnya.'
            ]
        },
        'art-5': {
            ikon: '⚖️',
            judul: 'Hak Rehabilitasi bagi Korban (UU No. 35 Tahun 2009)',
            sumber: 'Undang-Undang Republik Indonesia No. 35 Tahun 2009',
            isi: [
                'Berdasarkan Pasal 54 UU No. 35 Tahun 2009 tentang Narkotika, pecandu dan korban penyalahgunaan narkotika wajib menjalani rehabilitasi medis dan rehabilitasi sosial.',
                'Hukum di Indonesia membedakan secara tegas antara bandar/pengedar dengan korban/pecandu. Korban penyalahgunaan diperlakukan sebagai pasien yang membutuhkan pertolongan medis untuk lepas dari jeratan adiksi.',
                'Melalui mekanisme Institusi Penerima Wajib Lapor (IPWL), pecandu atau keluarganya yang secara sukarela melapor untuk mendapatkan pengobatan TIDAK AKAN dituntut pidana!',
                'Rehabilitasi medis bertujuan memulihkan ketergantungan fisik melalui detoksifikasi dan penanganan medis, sementara rehabilitasi sosial mengembalikan mental, emosi, dan kesiapan untuk berbaur kembali di masyarakat.',
                'Mari kita hapuskan stigma: mencari bantuan dan rehabilitasi adalah langkah ksatria untuk meraih masa depan yang bersih dan bersinar!'
            ]
        },
        'art-6': {
            ikon: '📞',
            judul: 'Layanan Hotline & Bantuan Konseling Rahasia',
            sumber: 'Pusat Layanan BNN & Kemenkes RI',
            isi: [
                'Jika kamu atau orang di sekitarmu membutuhkan konsultasi, informasi akurat, atau pertolongan darurat, jangan ragu memanfaatkan saluran bantuan resmi berikut:',
                '1. Call Center BNN RI: 184 (Layanan pengaduan, konsultasi pencegahan dan informasi rehabilitasi seluruh Indonesia).',
                '2. Halo Kemenkes: 1500-567 (Konsultasi kesehatan mental dan informasi fasilitas kesehatan resmi).',
                '3. Portal Resmi BNN: https://bnn.go.id untuk mengakses data riset, regulasi, dan modul edukasi P4GN terbaru.',
                '4. Ruang BK Sekolah: Guru Bimbingan dan Konseling di sekolahmu adalah sahabat terdekat yang siap mendengar dan menjaga kerahasiaan masalahmu.',
                'Seluruh layanan ini menjamin kerahasiaan identitasmu. Jangan pernah ragu untuk meminta bantuan!'
            ]
        }
    };

    // Modal artikel
    const modalOverlay = document.getElementById('modalArtikel');
    const modalIcon = document.getElementById('modalArticleIcon');
    const modalTitle = document.getElementById('modalArticleTitle');
    const modalSource = document.getElementById('modalArticleSource');
    const modalBody = document.getElementById('modalArticleBody');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    window.bukaArtikel = function (id) {
        const art = ARTIKEL_DATA[id];
        if (!art || !modalOverlay) return;
        modalIcon.textContent = art.ikon;
        modalTitle.textContent = art.judul;
        modalSource.textContent = art.sumber;
        modalBody.innerHTML = art.isi.map(p => `<p>${p}</p>`).join('');
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    function tutupModalArtikel() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', tutupModalArtikel);
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) tutupModalArtikel();
        });
    }
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
            tutupModalArtikel();
        }
    });

    // ==========================================
    // 2. TANYA SAHABAT AI (GEMINI AI INTEGRATION)
    // ==========================================
    // Kunci API diambil dari LocalStorage pengguna agar aman dan tidak dicabut otomatis oleh GitHub
    function getActiveApiKey() {
        const customKey = (localStorage.getItem('sadar_gemini_api_key') || '').trim();
        if (customKey && customKey.length > 10) {
            return customKey;
        }
        return '';
    }

    const chatMessagesEl = document.getElementById('chatMessages');
    const chatInputEl = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');

    // System prompt untuk memandu AI SADAR
    const SYSTEM_INSTRUCTION = `Kamu adalah "Sahabat AI SADAR" (Sarana Edukasi dan Deteksi Anti Narkoba), asisten AI edukatif yang ramah, hangat, empatik, dan berpengetahuan luas untuk pelajar kelas XI dan masyarakat umum.
Tujuan utamamu:
1. Mengedukasi tentang bahaya narkotika, psikotropika, dan zat adiktif (P4GN).
2. Memberikan tips praktis menolak ajakan zat terlarang (sikap asertif) dan menjaga kesehatan mental.
3. Menjelaskan hak rehabilitasi medis dan sosial sesuai UU No. 35 Tahun 2009 (korban berhak pulih, bukan dihukum/distigma).
4. Menyarankan pertolongan nyata bila ada sahabat yang butuh bantuan: ajak bicara Guru BK, atau hubungi Call Center BNN 184 dan Halo Kemkes 1500-567.
Gunakan bahasa Indonesia yang santun, ramah, mudah dipahami remaja, beri emoji yang bersahabat, dan selalu berikan dorongan semangat positif!`;

    // Database jawaban offline untuk memastikan demo SELALU lancar tanpa gagal
    const OFFLINE_KB = [
        {
            keywords: ['apa itu p4gn', 'kepanjangan p4gn', 'arti p4gn'],
            response: `**P4GN** adalah singkatan resmi dari **Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika** yang dicanangkan oleh BNN RI. 🌟\n\nTujuannya adalah melindungi masyarakat—khususnya generasi muda pelajar—dari ancaman bahaya narkotika melalui edukasi dini, pengawasan lingkungan, serta pemulihan bagi para korban.`
        },
        {
            keywords: ['sadar', 'apa itu sadar', 'singkatan sadar'],
            response: `**SADAR** adalah singkatan dari **Sarana Edukasi dan Deteksi Anti Narkoba** 🍡.\n\nPlatform ini dirancang khusus oleh tim PjBL Kelas XI RPL untuk menyediakan ruang aman, edukatif, dan ramah bagi pelajar untuk belajar tentang pencegahan zat berbahaya tanpa rasa dihakimi.`
        },
        {
            keywords: ['tolak', 'menolak', 'menolak ajakan', 'tegas', 'cara menolak'],
            response: `Menolak ajakan negatif membutuhkan **sikap asertif** yang percaya diri! 💪 Berikut tipsnya:\n\n1. **Katakan 'TIDAK' dengan tegas:** Cukup ucapkan *"Maaf, aku nggak tertarik"* atau *"Aku jaga kesehatan badanku"*, tanpa perlu berdebat.\n2. **Alihkan topik:** Ajak lakukan hal seru lain, misalnya *"Mending kita main futsal/mabar game aja yuk!"*\n3. **Tinggalkan situasi:** Jika mereka terus memaksa, kamu berhak pamit pergi dengan tenang.\n4. **Cari circle positif:** Sahabat sejati akan selalu menghargai pilihan sehatmu!`
        },
        {
            keywords: ['ciri', 'gejala', 'tanda', 'teman'],
            response: `Berikut beberapa tanda perubahan awal yang perlu diperhatikan jika ada sahabat yang butuh bantuan:\n\n• Perubahan pola tidur drastis dan sering terlihat lesu/mata merah.\n• Menarik diri dari lingkaran pertemanan akrab secara tiba-tiba.\n• Nilai pelajaran atau semangat sekolah menurun drastis.\n• Emosi mudah berubah atau sering gelisah.\n\n**Tips:** Jangan jauhi atau gosipkan mereka! Ajak bicara empatik secara empat mata dan tawarkan bantuan untuk berkonsultasi ke Guru BK.`
        },
        {
            keywords: ['rehabilitasi', 'hukum', 'uu', 'pasal', 'penjara'],
            response: `Berdasarkan **UU No. 35 Tahun 2009 tentang Narkotika**:\n\n⚖️ Pecandu dan korban penyalahgunaan narkotika **berhak mendapatkan rehabilitasi medis dan sosial**.\n\nHukum di Indonesia membedakan antara pengedar dan korban. Korban yang melapor secara sukarela melalui Institusi Penerima Wajib Lapor (IPWL) **tidak akan dipidana**, melainkan dirawat agar sembuh dan pulih kembali!`
        },
        {
            keywords: ['nomor', 'kontak', 'hotline', 'darurat', 'telepon', 'call center'],
            response: `Catat kontak penting bantuan resmi ini ya! 📞\n\n• **Call Center BNN RI:** Hubungi **184** (bebas pulsa & rahasia terjamin)\n• **Halo Kemkes RI:** Hubungi **1500-567**\n• **Guru Bimbingan Konseling (BK):** Konsultasi langsung di ruang BK sekolahmu.\n\nJangan ragu untuk mencari bantuan, kamu tidak sendirian!`
        },
        {
            keywords: ['dampak', 'bahaya', 'kesehatan', 'efek'],
            response: `Dampak penyalahgunaan narkotika sangat berbahaya bagi masa depan remaja:\n\n🧠 **Fungsi Otak:** Merusak memori, menurunkan konsentrasi, dan mengacaukan pengambilan keputusan.\n🫀 **Fisik:** Gangguan fungsi jantung, paru-paru, hati, ginjal, serta risiko overdosis.\n😔 **Kesehatan Mental:** Memicu depresi berat, kecemasan akut, paranoid, dan ketergantungan.\n🏫 **Sosial:** Hilangnya masa depan, prestasi hancur, dan hubungan keluarga renggang.`
        }
    ];

    function cariJawabanOffline(pesan) {
        const text = pesan.toLowerCase();
        for (const item of OFFLINE_KB) {
            if (item.keywords.some(k => text.includes(k))) {
                return item.response;
            }
        }
        return `Terima kasih atas pertanyaannya! 🌸\n\nUntuk melindungi dirimu dan teman-teman, selalu ingat prinsip utama **P4GN**: kenali faktanya, tolak tegas ajakan berisiko, dan jangan ragu curhat ke orang tua atau Guru BK.\n\nJika butuh konsultasi rahasia atau pendampingan darurat, kamu selalu bisa menghubungi **Call Center BNN di 184** atau Halo Kemkes di **1500-567**. Tetap semangat belajar dan berprestasi! ✨`;
    }

    function appendMessage(text, sender = 'bot', isMarkdown = true, timeStr = null) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-msg ${sender}`;

        const avatar = document.createElement('div');
        avatar.className = 'chat-msg-avatar';
        avatar.textContent = sender === 'bot' ? '🍡' : '👤';

        const bubble = document.createElement('div');
        bubble.className = 'chat-msg-bubble';

        if (isMarkdown) {
            bubble.innerHTML = formatMarkdown(text);
        } else {
            bubble.textContent = text;
        }

        const time = document.createElement('span');
        time.className = 'chat-msg-time';
        if (timeStr) {
            time.textContent = timeStr;
        } else {
            const now = new Date();
            time.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        }
        bubble.appendChild(time);

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);

        chatMessagesEl.appendChild(msgDiv);
        chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
        return msgDiv;
    }

    function formatMarkdown(text) {
        if (!text) return '';
        let formatted = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Bold **text**
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Italic *text*
        formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Split by double newline to paragraphs
        const paragraphs = formatted.split(/\n\n+/);
        return paragraphs.map(p => {
            p = p.trim();
            if (!p) return '';
            // Check for list items
            if (p.includes('\n• ') || p.startsWith('• ') || p.includes('\n- ') || p.startsWith('- ')) {
                const items = p.split(/\n[•\-]\s*/);
                const first = items[0].startsWith('• ') || items[0].startsWith('- ') ? items[0].replace(/^[•\-]\s*/, '') : items.shift();
                let html = (first && !first.startsWith('• ') && !first.startsWith('- ')) ? `<p>${first}</p>` : '';
                html += '<ul>' + (items.length ? items : [first]).map(it => `<li>${it.replace(/\n/g, '<br>')}</li>`).join('') + '</ul>';
                return html;
            }
            return `<p>${p.replace(/\n/g, '<br>')}</p>`;
        }).join('');
    }

    function showTypingIndicator() {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg bot typing-indicator-msg';
        msgDiv.id = 'typingIndicator';

        const avatar = document.createElement('div');
        avatar.className = 'chat-msg-avatar';
        avatar.textContent = '🍡';

        const bubble = document.createElement('div');
        bubble.className = 'chat-msg-bubble';
        bubble.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);

        chatMessagesEl.appendChild(msgDiv);
        chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    }

    function hideTypingIndicator() {
        const ind = document.getElementById('typingIndicator');
        if (ind) ind.remove();
    }

    // Cache model yang valid agar tidak perlu request berulang-ulang
    let cachedWorkingModel = null;

    async function getAvailableModel(apiKey) {
        if (!apiKey || apiKey.startsWith('AQ.')) return 'gemini-2.5-flash';
        if (cachedWorkingModel) return cachedWorkingModel;

        const candidateModels = [
            'gemini-3.5-flash-lite',
            'gemini-2.5-flash',
            'gemini-2.0-flash',
            'gemini-1.5-flash'
        ];

        try {
            const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(apiKey)}`);
            if (listRes.ok) {
                const listData = await listRes.json();
                if (listData.models && Array.isArray(listData.models)) {
                    const available = listData.models
                        .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
                        .map(m => m.name.replace('models/', ''));

                    for (const cand of candidateModels) {
                        if (available.includes(cand)) {
                            cachedWorkingModel = cand;
                            return cachedWorkingModel;
                        }
                    }
                    if (available.length > 0) {
                        cachedWorkingModel = available[0];
                        return cachedWorkingModel;
                    }
                }
            }
        } catch (e) {
            // ignore
        }

        cachedWorkingModel = 'gemini-2.5-flash';
        return cachedWorkingModel;
    }

    async function callGeminiAPI(userPrompt) {
        const apiKey = getActiveApiKey();

        // Jika belum ada API key valid, langsung gunakan basis pengetahuan cerdas offline
        // agar konsol browser tetap bersih dari status error 401 Unauthorized
        if (!apiKey || apiKey.startsWith('AQ.')) {
            return cariJawabanOffline(userPrompt);
        }

        const model = await getAvailableModel(apiKey);

        // 1. Coba panggil Google Generative Language API dengan model terpilih
        try {
            const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
            const payload = {
                system_instruction: {
                    parts: [{ text: SYSTEM_INSTRUCTION }]
                },
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: userPrompt }]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 800
                }
            };

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(new Error('Request timeout')), 35000);

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (response.ok) {
                const data = await response.json();
                if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                    return data.candidates[0].content.parts.map(p => p.text).join('\n');
                }
            }
        } catch (err) {
            // Silently fallback to offline knowledge
        }

        // 2. Jika Google API tidak merespon / kuota habis, gunakan basis pengetahuan offline P4GN SADAR
        return cariJawabanOffline(userPrompt);
    }

    async function handleSend() {
        if (!chatInputEl) return;
        const text = chatInputEl.value.trim();
        if (!text) return;

        appendMessage(text, 'user', false);
        chatInputEl.value = '';
        chatSendBtn.disabled = true;

        // Simpan pesan user ke database
        const activeUser = window.SadarDB ? window.SadarDB.getCurrentUser() : null;
        const currentUserId = activeUser ? activeUser.id : 'guest';
        if (window.SadarDB) {
            window.SadarDB.saveChatMessage({
                userId: currentUserId,
                sender: 'user',
                message: text
            });
        }

        showTypingIndicator();

        try {
            const reply = await callGeminiAPI(text);
            hideTypingIndicator();
            appendMessage(reply, 'bot', true);

            // Simpan respon AI ke database
            if (window.SadarDB) {
                window.SadarDB.saveChatMessage({
                    userId: currentUserId,
                    sender: 'bot',
                    message: reply
                });
            }
        } catch (err) {
            hideTypingIndicator();
            const fallback = cariJawabanOffline(text);
            appendMessage(fallback, 'bot', true);

            // Simpan respon fallback ke database
            if (window.SadarDB) {
                window.SadarDB.saveChatMessage({
                    userId: currentUserId,
                    sender: 'bot',
                    message: fallback
                });
            }
        } finally {
            chatSendBtn.disabled = false;
            chatInputEl.focus();
        }
    }

    if (chatSendBtn) chatSendBtn.addEventListener('click', handleSend);
    if (chatInputEl) {
        chatInputEl.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
            }
        });
    }

    // Quick Chips
    window.askQuestion = function (questionText) {
        if (!chatInputEl) return;
        chatInputEl.value = questionText;
        handleSend();
    };


    // ==========================================
    // 3. KUIS INTERAKTIF SADAR (dari html5up-editorial)
    // ==========================================
    const DATA_KUIS = [
        {
            tanya: 'Apa kepanjangan dari singkatan SADAR pada platform ini?',
            opsi: [
                'Sistem Antisipasi dan Deteksi Awal Remaja',
                'Sarana Edukasi dan Deteksi Anti Narkoba',
                'Satuan Aksi Daerah Anti Rokok & Narkotika',
                'Sentra Advokasi Dampak Adiksi Remaja'
            ],
            jawaban: 1,
            penjelasan: 'Tepat! SADAR merupakan singkatan dari Sarana Edukasi dan Deteksi Anti Narkoba.'
        },
        {
            tanya: 'Apa kepanjangan dari P4GN menurut Badan Narkotika Nasional (BNN)?',
            opsi: [
                'Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika',
                'Pengawasan, Pemeriksaan, Pengobatan, dan Gerakan Narkotika',
                'Pusat Perlindungan Pelajar dan Pemuda Gerakan Nasional',
                'Pencegahan, Pemulihan, Penindakan, dan Gerakan Narkotika'
            ],
            jawaban: 0,
            penjelasan: 'Benar! P4GN adalah singkatan resmi BNN untuk Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika.'
        },
        {
            tanya: 'Menurut Undang-Undang di Indonesia, hak apa yang dimiliki oleh seorang penyalahguna narkotika untuk pemulihan?',
            opsi: [
                'Hak pengucilan dari lingkungan sosial',
                'Hak mendapatkan hukuman fisik tanpa peradilan',
                'Hak mendapatkan rehabilitasi medis dan sosial',
                'Hak dibebaskan tanpa pengawasan apapun'
            ],
            jawaban: 2,
            penjelasan: 'Tepat! Berdasarkan UU No. 35 Tahun 2009, penyalahguna dan pecandu narkotika wajib menjalani rehabilitasi medis dan sosial untuk pemulihan.'
        },
        {
            tanya: 'Jika temanmu membujuk untuk mencoba zat terlarang, langkah pencegahan terbaik adalah...',
            opsi: [
                'Mencobanya sedikit saja agar tidak dijauhi teman',
                'Menolak dengan tegas ("Tidak"), mengalihkan topik, dan mencari lingkungan yang sehat',
                'Menyimpan rahasia tersebut tanpa memberitahu orang tua atau guru BK',
                'Membalas dengan membelikan zat lain'
            ],
            jawaban: 1,
            penjelasan: 'Benar! Keterampilan asertif menolak dengan tegas, menjaga jarak dari situasi berisiko, dan mencari dukungan adalah kunci utama pencegahan diri.'
        },
        {
            tanya: 'Di lingkungan sekolah, siapa pihak pertama yang paling tepat dan aman untuk diajak berbicara seputar masalah ini?',
            opsi: [
                'Guru Bimbingan Konseling (Guru BK)',
                'Teman sebaya yang juga coba-coba',
                'Orang asing di media sosial tanpa identitas',
                'Penjaga toko di luar sekolah'
            ],
            jawaban: 0,
            penjelasan: 'Tepat! Guru BK di sekolah dilatih untuk mendengarkan, menjaga kerahasiaan, serta mengarahkan ke langkah bantuan yang benar.'
        }
    ];

    let kuisIndex = 0;
    let kuisScore = 0;
    let kuisAnswered = false;

    const kuisNumberEl = document.getElementById('kuisNumber');
    const kuisScoreLiveEl = document.getElementById('kuisScoreLive');
    const kuisProgressBarEl = document.getElementById('kuisProgressBar');
    const kuisQuestionEl = document.getElementById('kuisQuestion');
    const kuisOptionsEl = document.getElementById('kuisOptions');
    const kuisFeedbackEl = document.getElementById('kuisFeedback');
    const kuisNextBtn = document.getElementById('kuisNextBtn');
    const kuisContentBox = document.getElementById('kuisContentBox');
    const kuisResultBox = document.getElementById('kuisResultBox');
    const kuisFinalScoreEl = document.getElementById('kuisFinalScore');
    const kuisFinalTitleEl = document.getElementById('kuisFinalTitle');
    const kuisFinalMsgEl = document.getElementById('kuisFinalMsg');
    const kuisRestartBtn = document.getElementById('kuisRestartBtn');

    function renderKuis() {
        if (!kuisQuestionEl) return;
        kuisAnswered = false;
        const q = DATA_KUIS[kuisIndex];

        if (kuisNumberEl) kuisNumberEl.textContent = `Pertanyaan ${kuisIndex + 1} dari ${DATA_KUIS.length}`;
        if (kuisScoreLiveEl) kuisScoreLiveEl.textContent = `Skor: ${kuisScore}`;
        if (kuisProgressBarEl) kuisProgressBarEl.style.width = `${((kuisIndex) / DATA_KUIS.length) * 100}%`;

        kuisQuestionEl.textContent = q.tanya;
        kuisOptionsEl.innerHTML = '';
        kuisFeedbackEl.style.display = 'none';
        kuisNextBtn.style.display = 'none';

        q.opsi.forEach((optText, i) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'kuis-opt-btn';
            btn.innerHTML = `<strong>${String.fromCharCode(65 + i)}.</strong> <span>${optText}</span>`;
            btn.addEventListener('click', () => jawabKuis(i));
            kuisOptionsEl.appendChild(btn);
        });
    }

    function jawabKuis(choiceIdx) {
        if (kuisAnswered) return;
        kuisAnswered = true;

        const q = DATA_KUIS[kuisIndex];
        const buttons = kuisOptionsEl.querySelectorAll('.kuis-opt-btn');
        buttons.forEach(b => b.disabled = true);

        const isCorrect = choiceIdx === q.jawaban;
        if (isCorrect) {
            kuisScore++;
            buttons[choiceIdx].classList.add('correct');
            kuisFeedbackEl.className = 'kuis-feedback-box correct';
            kuisFeedbackEl.innerHTML = `<strong>🎉 Hebat! Jawaban Benar</strong><br>${q.penjelasan}`;
        } else {
            buttons[choiceIdx].classList.add('wrong');
            buttons[q.jawaban].classList.add('correct');
            kuisFeedbackEl.className = 'kuis-feedback-box wrong';
            kuisFeedbackEl.innerHTML = `<strong>💡 Jawaban Kurang Tepat</strong><br>${q.penjelasan}`;
        }

        if (kuisScoreLiveEl) kuisScoreLiveEl.textContent = `Skor: ${kuisScore}`;
        kuisFeedbackEl.style.display = 'block';

        if (kuisIndex < DATA_KUIS.length - 1) {
            kuisNextBtn.textContent = 'Lanjut ➜';
        } else {
            kuisNextBtn.textContent = 'Lihat Hasil Kuis 🏆';
        }
        kuisNextBtn.style.display = 'inline-block';
    }

    if (kuisNextBtn) {
        kuisNextBtn.addEventListener('click', () => {
            if (kuisIndex < DATA_KUIS.length - 1) {
                kuisIndex++;
                renderKuis();
            } else {
                tampilkanHasilKuis();
            }
        });
    }

    function tampilkanHasilKuis() {
        if (kuisProgressBarEl) kuisProgressBarEl.style.width = '100%';
        if (kuisContentBox) kuisContentBox.style.display = 'none';
        if (kuisResultBox) kuisResultBox.style.display = 'block';
        if (kuisFinalScoreEl) kuisFinalScoreEl.textContent = `${kuisScore}/${DATA_KUIS.length}`;

        if (kuisScore === DATA_KUIS.length) {
            kuisFinalTitleEl.textContent = '🌟 Luar Biasa! Nilai Sempurna';
            kuisFinalMsgEl.textContent = 'Kamu memahami konsep edukasi pencegahan narkoba dengan sangat baik. Terus sebarkan kepedulian ini!';
        } else if (kuisScore >= 3) {
            kuisFinalTitleEl.textContent = '👍 Bagus Sekali!';
            kuisFinalMsgEl.textContent = 'Pemahamanmu tentang edukasi P4GN sudah sangat baik. Baca artikel edukasi untuk wawasan yang lebih lengkap.';
        } else {
            kuisFinalTitleEl.textContent = '💪 Tetap Semangat!';
            kuisFinalMsgEl.textContent = 'Jangan khawatir, kamu bisa membaca kembali materi pada menu Edukasi untuk memperdalam pengetahuanmu.';
        }
    }

    if (kuisRestartBtn) {
        kuisRestartBtn.addEventListener('click', () => {
            kuisIndex = 0;
            kuisScore = 0;
            if (kuisContentBox) kuisContentBox.style.display = 'block';
            if (kuisResultBox) kuisResultBox.style.display = 'none';
            renderKuis();
        });
    }

    // Inisialisasi awal
    renderKuis();

    // Interaktivitas Mood Tracker pada Mockup Ponsel
    const moodCardDesc = document.querySelector('.phone-card p');
    const moodCardTitle = document.querySelector('.phone-card-title');
    const moodTexts = {
        'Semangat': {
            title: '🔥 Semangat Berprestasi',
            desc: 'Energi positifmu sangat berharga! Salurkan ke hobi dan prestasi, tolak segala bentuk zat berbahaya.'
        },
        'Tenang & Bahagia': {
            title: '🌿 Ruang Aman & Tenang',
            desc: 'Pikiran yang tenang adalah benteng terbaik diri. Pertahankan gaya hidup sehat dan saling menguatkan.'
        },
        'Butuh Teman Bicara': {
            title: '💬 Kamu Tidak Sendirian',
            desc: 'Ada kalanya kita butuh didengarkan. Ruang BK, Sahabat AI, dan sahabat terpercaya selalu siap mendengarkan.'
        },
        'Sedang Cemas / Lelah': {
            title: '❤️ Rangkul Dirimu',
            desc: 'Tarik napas perlahan. Jangan ragu mencari bantuan ke guru BK di sekolah atau hubungi hotline BNN 184 secara rahasia.'
        }
    };

    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const titleAttr = this.getAttribute('title');
            if (titleAttr && moodTexts[titleAttr] && moodCardTitle && moodCardDesc) {
                moodCardTitle.textContent = moodTexts[titleAttr].title;
                moodCardDesc.textContent = moodTexts[titleAttr].desc;
            }
        });
    });

    // ============================================================
    // 4. SISTEM OTENTIKASI (REGISTER & LOGIN) & CHAT HISTORY DATABASE
    // ============================================================

    // Toast Notifikasi
    function showToast(message, icon = '✨') {
        const toast = document.getElementById('sadarToast');
        const msgEl = document.getElementById('toastMsg');
        const iconEl = document.getElementById('toastIcon');
        if (!toast) return;
        if (msgEl) msgEl.textContent = message;
        if (iconEl) iconEl.textContent = icon;
        toast.classList.add('show');
        clearTimeout(toast._timer);
        toast._timer = setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    // Modal Auth Controls
    const modalLogin = document.getElementById('modalLogin');
    const modalRegister = document.getElementById('modalRegister');
    const modalLoginClose = document.getElementById('modalLoginClose');
    const modalRegisterClose = document.getElementById('modalRegisterClose');

    const btnOpenLogin = document.getElementById('btnOpenLogin');
    const btnOpenRegister = document.getElementById('btnOpenRegister');
    const mBtnOpenLogin = document.getElementById('mBtnOpenLogin');
    const mBtnOpenRegister = document.getElementById('mBtnOpenRegister');

    const linkSwitchToRegister = document.getElementById('linkSwitchToRegister');
    const linkSwitchToLogin = document.getElementById('linkSwitchToLogin');

    const btnLogout = document.getElementById('btnLogout');
    const mBtnLogout = document.getElementById('mBtnLogout');

    function openModal(modalEl) {
        if (!modalEl) return;
        modalEl.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modalEl) {
        if (!modalEl) return;
        modalEl.classList.remove('open');
        document.body.style.overflow = '';
        const errs = modalEl.querySelectorAll('.auth-alert');
        errs.forEach(el => { el.style.display = 'none'; el.textContent = ''; });
    }

    if (btnOpenLogin) btnOpenLogin.addEventListener('click', () => openModal(modalLogin));
    if (mBtnOpenLogin) mBtnOpenLogin.addEventListener('click', () => {
        if (window.closeMobileMenu) window.closeMobileMenu();
        openModal(modalLogin);
    });

    if (btnOpenRegister) btnOpenRegister.addEventListener('click', () => openModal(modalRegister));
    if (mBtnOpenRegister) mBtnOpenRegister.addEventListener('click', () => {
        if (window.closeMobileMenu) window.closeMobileMenu();
        openModal(modalRegister);
    });

    if (modalLoginClose) modalLoginClose.addEventListener('click', () => closeModal(modalLogin));
    if (modalRegisterClose) modalRegisterClose.addEventListener('click', () => closeModal(modalRegister));

    [modalLogin, modalRegister].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal(modal);
            });
        }
    });

    if (linkSwitchToRegister) {
        linkSwitchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(modalLogin);
            openModal(modalRegister);
        });
    }

    if (linkSwitchToLogin) {
        linkSwitchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(modalRegister);
            openModal(modalLogin);
        });
    }

    // Toggle lihat kata sandi
    const toggleLoginPwd = document.getElementById('toggleLoginPwd');
    const loginPassword = document.getElementById('loginPassword');
    if (toggleLoginPwd && loginPassword) {
        toggleLoginPwd.addEventListener('click', () => {
            const isPwd = loginPassword.type === 'password';
            loginPassword.type = isPwd ? 'text' : 'password';
            toggleLoginPwd.textContent = isPwd ? '🙈' : '👁️';
        });
    }

    const toggleRegPwd = document.getElementById('toggleRegPwd');
    const regPassword = document.getElementById('regPassword');
    if (toggleRegPwd && regPassword) {
        toggleRegPwd.addEventListener('click', () => {
            const isPwd = regPassword.type === 'password';
            regPassword.type = isPwd ? 'text' : 'password';
            toggleRegPwd.textContent = isPwd ? '🙈' : '👁️';
        });
    }

    // Sinkronisasi status Tampilan Navbar & Mobile Drawer
    function updateAuthUI() {
        const currentUser = window.SadarDB ? window.SadarDB.getCurrentUser() : null;

        const navAuthGroup = document.getElementById('navAuthGroup');
        const navUserGroup = document.getElementById('navUserGroup');
        const navUserName = document.getElementById('navUserName');
        const navUserAvatar = document.getElementById('navUserAvatar');

        const mobileAuthGuest = document.getElementById('mobileAuthGuest');
        const mobileAuthUser = document.getElementById('mobileAuthUser');
        const mUserName = document.getElementById('mUserName');
        const mUserAvatar = document.getElementById('mUserAvatar');

        if (currentUser) {
            if (navAuthGroup) navAuthGroup.style.display = 'none';
            if (navUserGroup) navUserGroup.style.display = 'inline-flex';
            if (navUserName) navUserName.textContent = currentUser.name.split(' ')[0];
            if (navUserAvatar) navUserAvatar.textContent = currentUser.avatar || '👤';

            if (mobileAuthGuest) mobileAuthGuest.style.display = 'none';
            if (mobileAuthUser) mobileAuthUser.style.display = 'block';
            if (mUserName) mUserName.textContent = currentUser.name;
            if (mUserAvatar) mUserAvatar.textContent = currentUser.avatar || '👤';
        } else {
            if (navAuthGroup) navAuthGroup.style.display = 'inline-flex';
            if (navUserGroup) navUserGroup.style.display = 'none';

            if (mobileAuthGuest) mobileAuthGuest.style.display = 'flex';
            if (mobileAuthUser) mobileAuthUser.style.display = 'none';
        }
    }

    // Form Submit: Login
    const formLogin = document.getElementById('formLogin');
    const loginAlertError = document.getElementById('loginAlertError');
    const loginAlertSuccess = document.getElementById('loginAlertSuccess');

    if (formLogin) {
        formLogin.addEventListener('submit', async function (e) {
            e.preventDefault();
            if (loginAlertError) loginAlertError.style.display = 'none';
            if (loginAlertSuccess) loginAlertSuccess.style.display = 'none';

            const identifier = document.getElementById('loginIdentifier').value.trim();
            const password = document.getElementById('loginPassword').value;

            const submitBtn = document.getElementById('btnSubmitLogin');
            if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<span>⏳</span> Memverifikasi...'; }

            try {
                const res = await window.SadarDB.login(identifier, password);
                if (res.success) {
                    if (loginAlertSuccess) {
                        loginAlertSuccess.textContent = res.message;
                        loginAlertSuccess.style.display = 'block';
                    }
                    setTimeout(() => {
                        closeModal(modalLogin);
                        formLogin.reset();
                        updateAuthUI();
                        loadUserChatHistory();
                        showToast(`Selamat datang kembali, ${res.user.name}!`, '🎓');
                    }, 500);
                } else {
                    if (loginAlertError) {
                        loginAlertError.textContent = res.message;
                        loginAlertError.style.display = 'block';
                    }
                }
            } catch (err) {
                if (loginAlertError) {
                    loginAlertError.textContent = 'Terjadi kendala otentikasi. Silakan coba lagi.';
                    loginAlertError.style.display = 'block';
                }
            } finally {
                if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<span>🚀</span> Masuk Sekarang'; }
            }
        });
    }

    // Form Submit: Register
    const formRegister = document.getElementById('formRegister');
    const regAlertError = document.getElementById('regAlertError');
    const regAlertSuccess = document.getElementById('regAlertSuccess');

    if (formRegister) {
        formRegister.addEventListener('submit', async function (e) {
            e.preventDefault();
            if (regAlertError) regAlertError.style.display = 'none';
            if (regAlertSuccess) regAlertSuccess.style.display = 'none';

            const name = document.getElementById('regName').value.trim();
            const username = document.getElementById('regUsername').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;

            if (password !== confirmPassword) {
                if (regAlertError) {
                    regAlertError.textContent = 'Konfirmasi kata sandi tidak cocok. Harap periksa kembali.';
                    regAlertError.style.display = 'block';
                }
                return;
            }

            const submitBtn = document.getElementById('btnSubmitRegister');
            if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<span>⏳</span> Mendaftarkan...'; }

            try {
                const res = await window.SadarDB.register({ name, username, email, password });
                if (res.success) {
                    if (regAlertSuccess) {
                        regAlertSuccess.textContent = res.message;
                        regAlertSuccess.style.display = 'block';
                    }
                    setTimeout(() => {
                        closeModal(modalRegister);
                        formRegister.reset();
                        updateAuthUI();
                        loadUserChatHistory();
                        showToast(`Pendaftaran berhasil! Halo, ${res.user.name}.`, '✨');
                    }, 600);
                } else {
                    if (regAlertError) {
                        regAlertError.textContent = res.message;
                        regAlertError.style.display = 'block';
                    }
                }
            } catch (err) {
                if (regAlertError) {
                    regAlertError.textContent = 'Terjadi kendala saat pendaftaran. Silakan coba lagi.';
                    regAlertError.style.display = 'block';
                }
            } finally {
                if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = '<span>✨</span> Buat Akun SADAR'; }
            }
        });
    }

    // Logout Action
    function handleLogout() {
        if (!confirm('Apakah kamu yakin ingin keluar dari akun?')) return;
        if (window.SadarDB) window.SadarDB.logout();
        updateAuthUI();
        loadUserChatHistory();
        showToast('Kamu telah keluar dari akun.', '👋');
    }

    if (btnLogout) btnLogout.addEventListener('click', handleLogout);
    if (mBtnLogout) mBtnLogout.addEventListener('click', () => {
        if (window.closeMobileMenu) window.closeMobileMenu();
        handleLogout();
    });

    // ==========================================
    // RIWAYAT CHAT DATABASE LOADER & CLEANER
    // ==========================================
    async function loadUserChatHistory() {
        if (!chatMessagesEl || !window.SadarDB) return;
        const currentUser = window.SadarDB.getCurrentUser();
        const userId = currentUser ? currentUser.id : 'guest';

        try {
            const history = await window.SadarDB.getChatHistory(userId);
            chatMessagesEl.innerHTML = '';

            if (history && history.length > 0) {
                history.forEach(item => {
                    appendMessage(item.message, item.sender, item.sender === 'bot', item.time);
                });
            } else {
                const welcomeText = currentUser
                    ? `Halo **${currentUser.name}**! 🍡 Senang melihatmu kembali.\n\nRiwayat obrolanmu dengan **Sahabat AI SADAR** otomatis tersimpan di database akunmu. Silakan tanyakan apa saja seputar edukasi bahaya narkotika, program pencegahan P4GN, atau tips kesehatan mental!`
                    : `Halo! Aku **Sahabat AI SADAR** 🍡. Senang sekali bisa menemanimu di sini.\n\nAku siap membantumu berdiskusi tentang edukasi bahaya narkotika, program pencegahan P4GN, cara menjaga kesehatan mental, hingga langkah mencari pertolongan resmi tanpa stigma. Silakan tanyakan apa saja ya!`;
                appendMessage(welcomeText, 'bot', true);
            }
        } catch (e) {
            console.error('Gagal memuat riwayat chat:', e);
        }
    }

    // Tombol Bersihkan Riwayat Chat
    const btnClearChat = document.getElementById('btnClearChat');
    if (btnClearChat) {
        btnClearChat.addEventListener('click', async function () {
            const currentUser = window.SadarDB ? window.SadarDB.getCurrentUser() : null;
            const userId = currentUser ? currentUser.id : 'guest';
            const count = window.SadarDB ? await window.SadarDB.countChatHistory(userId) : 0;

            if (count === 0) {
                showToast('Belum ada riwayat chat yang tersimpan.', 'ℹ️');
                return;
            }

            if (!confirm('Hapus seluruh riwayat obrolan AI yang tersimpan di database akun ini?')) return;

            if (window.SadarDB) {
                await window.SadarDB.clearChatHistory(userId);
            }
            loadUserChatHistory();
            showToast('Riwayat chat berhasil dibersihkan dari database.', '🗑️');
        });
    }

    // Modal API Key Controls
    const btnConfigApiKey = document.getElementById('btnConfigApiKey');
    const modalApiKey = document.getElementById('modalApiKey');
    const modalApiKeyClose = document.getElementById('modalApiKeyClose');
    const formApiKey = document.getElementById('formApiKey');
    const inputApiKey = document.getElementById('inputApiKey');
    const btnResetApiKey = document.getElementById('btnResetApiKey');
    const toggleApiSecret = document.getElementById('toggleApiSecret');
    const apiKeyAlertSuccess = document.getElementById('apiKeyAlertSuccess');

    if (btnConfigApiKey) {
        btnConfigApiKey.addEventListener('click', () => {
            if (inputApiKey) inputApiKey.value = localStorage.getItem('sadar_gemini_api_key') || '';
            openModal(modalApiKey);
        });
    }

    if (modalApiKeyClose) {
        modalApiKeyClose.addEventListener('click', () => closeModal(modalApiKey));
    }

    if (modalApiKey) {
        modalApiKey.addEventListener('click', (e) => {
            if (e.target === modalApiKey) closeModal(modalApiKey);
        });
    }

    if (toggleApiSecret && inputApiKey) {
        toggleApiSecret.addEventListener('click', () => {
            const isPwd = inputApiKey.type === 'password';
            inputApiKey.type = isPwd ? 'text' : 'password';
            toggleApiSecret.textContent = isPwd ? '🙈' : '👁️';
        });
    }

    if (formApiKey) {
        formApiKey.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = (inputApiKey ? inputApiKey.value : '').trim();
            if (val) {
                localStorage.setItem('sadar_gemini_api_key', val);
                cachedWorkingModel = null;
                if (apiKeyAlertSuccess) {
                    apiKeyAlertSuccess.textContent = 'API Key berhasil disimpan di browsermu!';
                    apiKeyAlertSuccess.style.display = 'block';
                }
                setTimeout(() => {
                    closeModal(modalApiKey);
                    showToast('Kunci Gemini AI berhasil diperbarui!', '🔑');
                }, 700);
            }
        });
    }

    if (btnResetApiKey) {
        btnResetApiKey.addEventListener('click', () => {
            localStorage.removeItem('sadar_gemini_api_key');
            if (inputApiKey) inputApiKey.value = '';
            cachedWorkingModel = null;
            closeModal(modalApiKey);
            showToast('Kunci API telah dihapus (Mode Offline Aktif).', 'ℹ️');
        });
    }

    // Inisialisasi Auth UI dan History Chat saat halaman siap
    updateAuthUI();
    loadUserChatHistory();

})();

