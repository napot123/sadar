/* 
   SADAR — Sarana Edukasi dan Deteksi Anti Narkoba
   Interactivity & Gemini AI Logic
   PjBL Kelas XI RPL
*/

(function() {
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

    window.bukaArtikel = function(id) {
        const art = ARTIKEL_DATA[id];
        if (!art || !modalOverlay) return;
        if (modalIcon) modalIcon.textContent = art.ikon;
        if (modalTitle) modalTitle.textContent = art.judul;
        if (modalSource) modalSource.textContent = art.sumber;
        if (modalBody) modalBody.innerHTML = art.isi.map(p => `<p>${p}</p>`).join('');
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
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) tutupModalArtikel();
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
            tutupModalArtikel();
        }
    });

    // ==========================================
    // 1B. KONFIGURASI SUPABASE (URL & PUBLISHABLE KEY)
    // ==========================================
    const SUPABASE_URL = 'https://kqneikpldbrspcxhktrn.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_yDNOoLSlmVJieHTw7vOGiw_rEN_YHyE';

    // Inisialisasi Supabase Client dari library CDN
    let supabase = null;
    try {
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        }
    } catch (e) {
        console.warn('Inisialisasi Supabase client gagal:', e);
    }

    // Fungsi Registrasi User ke Supabase Auth & Tabel Profiles
    async function registerUser(email, password, username) {
        if (!supabase) throw new Error('Koneksi sistem belum siap. Periksa jaringan Anda.');
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username: username
                }
            }
        });
        if (error) throw error;

        if (data && data.user) {
            try {
                // Gunakan upsert agar tidak memicu HTTP 409 Conflict jika row profiles sudah dibuat oleh trigger database
                const { error: pErr } = await supabase.from('profiles').upsert({
                    id: data.user.id,
                    username
                }, { onConflict: 'id' });
                if (pErr) console.warn('Perhatian simpan profiles:', pErr.message || pErr);
            } catch (pErr) {
                console.warn('Perhatian simpan profiles:', pErr);
            }
        }
        return data;
    }

    function formatAuthErrorMessage(err, fallback) {
        const msg = (err && err.message) ? err.message : '';
        const lower = msg.toLowerCase();
        if (lower.includes('invalid login credentials')) {
            return 'Email atau kata sandi salah. Pastikan akun sudah terdaftar dan email/sandi benar.';
        }
        if (lower.includes('email not confirmed')) {
            return 'Email belum dikonfirmasi. Silakan cek kotak masuk atau folder spam email kamu.';
        }
        if (lower.includes('user already registered')) {
            return 'Email ini sudah terdaftar. Silakan masuk menggunakan akun yang sudah ada.';
        }
        return msg || fallback;
    }

    // Resolusi identifier (email atau username) menjadi alamat email untuk Supabase Auth
    async function resolveEmailFromIdentifier(identifier) {
        const clean = (identifier || '').trim();
        if (!clean) throw new Error('Harap masukkan username atau email.');

        if (clean.includes('@') && !clean.startsWith('@')) {
            const email = clean.toLowerCase();
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                throw new Error('Format alamat email tidak valid.');
            }
            return email;
        }

        const cleanUsername = clean.replace(/^@+/, '').toLowerCase();
        if (cleanUsername.length < 3) {
            throw new Error('Username minimal 3 karakter.');
        }

        // 1. Coba melalui RPC get_email_by_username di Supabase
        const { data: rpcEmail, error: rpcErr } = await supabase.rpc('get_email_by_username', {
            p_username: cleanUsername
        });

        if (!rpcErr) {
            if (rpcEmail) return String(rpcEmail).trim().toLowerCase();
            throw new Error('Username tidak ditemukan. Periksa kembali atau masuk menggunakan email.');
        }

        // 2. Fallback: cek kolom email di tabel profiles jika tersedia
        const { data: profileRow, error: profErr } = await supabase
            .from('profiles')
            .select('email')
            .ilike('username', cleanUsername)
            .maybeSingle();

        if (!profErr && profileRow && profileRow.email) {
            return String(profileRow.email).trim().toLowerCase();
        }

        throw new Error('Login dengan username membutuhkan fungsi get_email_by_username di Supabase. Untuk sementara silakan masuk dengan alamat email.');
    }

    // Fungsi Login User ke Supabase Auth (mendukung username atau email)
    async function loginUser(identifier, password) {
        if (!supabase) throw new Error('Koneksi sistem belum siap. Periksa jaringan Anda.');
        const email = await resolveEmailFromIdentifier(identifier);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if (error) throw error;
        return data.user;
    }

    // ==========================================
    // SISTEM PENYIMPANAN SESI & CACHE PESAN
    // ==========================================
    let userSessionsList = [];
    const localChatMemory = {};

    function getLocalSessionMessages(sessionId) {
        if (!sessionId) return [];
        if (!localChatMemory[sessionId]) {
            try {
                const stored = localStorage.getItem('sadar_chat_' + sessionId) || sessionStorage.getItem('sadar_chat_' + sessionId);
                localChatMemory[sessionId] = stored ? JSON.parse(stored) : [];
            } catch (e) {
                localChatMemory[sessionId] = [];
            }
        }
        return localChatMemory[sessionId];
    }

    function addLocalSessionMessage(sessionId, role, text) {
        if (!sessionId) return;
        const list = getLocalSessionMessages(sessionId);
        list.push({
            role: role,
            plain_text: text,
            created_at: new Date().toISOString()
        });
        localChatMemory[sessionId] = list;
        try {
            localStorage.setItem('sadar_chat_' + sessionId, JSON.stringify(list));
        } catch (e) {}
    }

    // Fungsi Muat Daftar Sesi Pengguna dari Supabase
    async function loadUserSessions() {
        if (!supabase) return userSessionsList;
        try {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session || !session.user) return userSessionsList;

            const { data, error } = await supabase
                .from('chat_sessions')
                .select('*')
                .eq('user_id', session.user.id)
                .order('created_at', { ascending: false });

            if (!error && Array.isArray(data) && data.length > 0) {
                userSessionsList = data;
                renderDaftarSesi(userSessionsList);
                return userSessionsList;
            }
        } catch (e) {
            console.warn('Muat sesi DB notice:', e);
        }
        return userSessionsList;
    }

    // Fungsi Pembuatan Sesi Obrolan di Supabase
    async function createSession(title = 'Sesi Konsultasi SADAR') {
        const localId = 'sess_' + Date.now();
        let finalId = localId;

        if (supabase) {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                const userId = session?.user?.id || null;

                // Coba simpan ke tabel chat_sessions jika tersedia
                let res = await supabase
                    .from('chat_sessions')
                    .insert([{ user_id: userId, title: title }])
                    .select()
                    .maybeSingle();

                // Jika gagal karena constraint user_id (misal 409 Conflict), retry tanpa user_id
                if (res && res.error && userId) {
                    res = await supabase
                        .from('chat_sessions')
                        .insert([{ title: title }])
                        .select()
                        .maybeSingle();
                }

                if (res && !res.error && res.data && res.data.id) {
                    finalId = res.data.id;
                }
            } catch (e) {
                console.warn('Simpan session ke DB:', e);
            }
        }

        // Masukkan ke daftar sesi aktif
        const existingIdx = userSessionsList.findIndex(s => s.id === finalId);
        if (existingIdx === -1) {
            userSessionsList.unshift({
                id: finalId,
                title: title,
                created_at: new Date().toISOString()
            });
            renderDaftarSesi(userSessionsList);
        }
        return finalId;
    }

    // Fungsi Simpan Pesan (Dual-storage: Cache Lokal + Supabase)
    async function saveMessage(sessionId, role, text) {
        if (!sessionId) return null;
        // Simpan selalu ke cache lokal agar pesan tidak pernah hilang
        addLocalSessionMessage(sessionId, role, text);

        if (!supabase) return null;
        try {
            const { data: { session } } = await supabase.auth.getSession();
            const userId = session?.user?.id || null;

            let res = await supabase
                .from('chat_messages')
                .insert([{
                    session_id: String(sessionId),
                    user_id: userId,
                    role: role,
                    content: text
                }])
                .select();

            // Jika gagal karena constraint user_id (misal 409 Conflict), retry tanpa user_id
            if (res && res.error && userId) {
                res = await supabase
                    .from('chat_messages')
                    .insert([{
                        session_id: String(sessionId),
                        role: role,
                        content: text
                    }])
                    .select();
            }

            if (res && !res.error) return res.data;
        } catch (e) {
            console.warn('Simpan message ke DB:', e);
        }
        return null;
    }

    // Fungsi Ambil Riwayat Pesan (Fallback ke Cache Lokal)
    async function loadChatHistory(sessionId) {
        if (!sessionId) return [];
        const localMsgs = getLocalSessionMessages(sessionId);

        if (supabase) {
            try {
                const { data, error } = await supabase
                    .from('chat_messages')
                    .select('*')
                    .eq('session_id', String(sessionId))
                    .order('created_at', { ascending: true });

                if (!error && Array.isArray(data) && data.length > 0) {
                    const mapped = data.map(item => ({
                        role: item.role,
                        plain_text: item.content || item.text || '',
                        created_at: item.created_at
                    }));
                    localChatMemory[sessionId] = mapped;
                    try { localStorage.setItem('sadar_chat_' + sessionId, JSON.stringify(mapped)); } catch(e){}
                    return mapped;
                }
            } catch (e) {
                console.warn('Ambil riwayat dari DB:', e);
            }
        }
        return localMsgs;
    }

    // Sesi obrolan aktif dari database Supabase
    let currentSessionId = null;

    // Helper sesi obrolan murni dari database Supabase (tanpa localStorage)
    async function getOrCreateUserSession() {
        if (!supabase) return null;
        if (currentSessionId) return currentSessionId;
        if (userSessionsList.length > 0) {
            currentSessionId = userSessionsList[0].id;
            return currentSessionId;
        }

        // Buat sesi terenkripsi baru melalui RPC Supabase
        try {
            const newSessionId = await createSession('Sesi Konsultasi SADAR');
            currentSessionId = newSessionId;
            return newSessionId;
        } catch (err) {
            console.warn('createSession notice:', err);
            return null;
        }
    }

    // Render riwayat chat terdekripsi ke layar
    function renderChatKeLayar(messages) {
        if (!chatMessagesEl) return;
        chatMessagesEl.innerHTML = '';

        if (messages && Array.isArray(messages) && messages.length > 0) {
            messages.forEach(item => {
                const role = item.role || item.p_role || item.sender || 'bot';
                const sender = (role === 'user') ? 'user' : 'bot';
                const text = item.plain_text || item.p_plain_text || item.text || item.content || '';
                const time = item.time || (item.created_at ? new Date(item.created_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : null);
                appendMessage(text, sender, sender === 'bot', time);
            });
        } else {
            const welcomeText = `Halo! Senang melihatmu di sini.\n\nRiwayat obrolanmu otomatis tersimpan aman. Silakan ajukan pertanyaanmu seputar bahaya narkotika, regulasi P4GN, cara menolak ajakan zat berbahaya, atau kesehatan mental!`;
            appendMessage(welcomeText, 'bot', true, null);
        }
    }

    // Render daftar sesi ke sidebar
    function renderDaftarSesi(sessions) {
        const listEl = document.getElementById('chatSessionList');
        const badge = document.getElementById('sessionCountBadge');
        if (!listEl) return;

        if (badge) badge.textContent = (sessions && Array.isArray(sessions)) ? sessions.length : 0;

        if (!sessions || sessions.length === 0) {
            listEl.innerHTML = `
                <div style="font-size: 0.78rem; color: #9E9E9E; text-align: center; padding: 25px 8px; line-height: 1.4;">
                    Belum ada sesi di database.<br>Ketik pertanyaan atau klik <strong>+ Chat Baru</strong> untuk memulai!
                </div>
            `;
            return;
        }

        listEl.innerHTML = '';
        sessions.forEach(sess => {
            const item = document.createElement('div');
            const isActive = (sess.id === currentSessionId);
            item.className = `chat-session-item ${isActive ? 'active' : ''}`;
            const dateStr = sess.created_at ? (() => {
                const d = new Date(sess.created_at);
                const tgl = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
                const jam = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace('.', ':');
                return `${tgl}, ${jam}`;
            })() : '';

            item.innerHTML = `
                <div class="session-info" style="cursor: pointer; flex: 1;">
                    <span class="session-item-title" title="${sess.title}">${sess.title}</span>
                    <span class="session-item-time">${dateStr}</span>
                </div>
            `;

            item.querySelector('.session-info').addEventListener('click', () => {
                pilihSesi(sess.id);
            });

            listEl.appendChild(item);
        });
    }

    function renderDaftarSesiActive(activeId) {
        const items = document.querySelectorAll('.chat-session-item');
        items.forEach(el => el.classList.remove('active'));
    }

    async function pilihSesi(sessionId) {
        if (!sessionId) return;

        // Jika mengeklik sesi yang sama dan pesannya sudah tampil, cukup tutup sidebar
        if (sessionId === currentSessionId && chatMessagesEl && chatMessagesEl.children.length > 1) {
            closeMobileSidebar();
            return;
        }

        currentSessionId = sessionId;
        renderDaftarSesi(userSessionsList);
        closeMobileSidebar();

        // Tampilkan pesan dari cache lokal langsung agar tidak blank/hilang
        const cached = getLocalSessionMessages(sessionId);
        if (cached && cached.length > 0) {
            renderChatKeLayar(cached);
        } else if (chatMessagesEl) {
            chatMessagesEl.innerHTML = `
                <div style="text-align: center; padding: 30px; color: #888;">
                    <span>⏳</span> Mengambil riwayat pesan...
                </div>
            `;
        }

        const messages = await loadChatHistory(sessionId);
        if (messages && messages.length > 0) {
            renderChatKeLayar(messages);
        } else if (!cached || cached.length === 0) {
            renderChatKeLayar([]);
        }
    }

    async function buatChatBaru() {
        currentSessionId = null;
        renderDaftarSesiActive(null);
        closeMobileSidebar();
        if (chatMessagesEl) {
            chatMessagesEl.innerHTML = '';
            appendMessage(`Halo! Sesi obrolan baru siap dimulai.\n\nSilakan ajukan pertanyaanmu seputar bahaya narkotika, regulasi P4GN, atau kesehatan mental. Aku siap membantumu!`, 'bot', true, null);
        }
        if (chatInputEl) {
            chatInputEl.value = '';
            chatInputEl.focus();
        }
        showToast('Sesi obrolan baru siap dimulai.', '✓');
    }

    function toggleMobileSidebar() {
        const sidebar = document.getElementById('chatSidebar');
        const backdrop = document.getElementById('chatSidebarBackdrop');
        if (!sidebar) return;
        const isOpen = sidebar.classList.contains('open');
        if (isOpen) {
            sidebar.classList.remove('open');
            if (backdrop) backdrop.classList.remove('show');
        } else {
            sidebar.classList.add('open');
            if (backdrop) backdrop.classList.add('show');
        }
    }

    function closeMobileSidebar() {
        const sidebar = document.getElementById('chatSidebar');
        const backdrop = document.getElementById('chatSidebarBackdrop');
        if (sidebar) sidebar.classList.remove('open');
        if (backdrop) backdrop.classList.remove('show');
    }

    function showToast(message, icon = '✓') {
        const toast = document.getElementById('sadarToast');
        const toastMsg = document.getElementById('toastMsg');
        const toastIcon = document.getElementById('toastIcon');
        if (!toast) return;
        if (toastMsg) toastMsg.textContent = message;
        if (toastIcon) toastIcon.textContent = icon;
        toast.classList.add('show');
        clearTimeout(window._toastTimer);
        window._toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    // Tampilkan UI Login & Logout
    function tampilkanUIUtama(username) {
        const navAuthGroup = document.getElementById('navAuthGroup');
        const navUserGroup = document.getElementById('navUserGroup');
        const navUserName = document.getElementById('navUserName');
        const navUserAvatar = document.getElementById('navUserAvatar');

        const mobileAuthGuest = document.getElementById('mobileAuthGuest');
        const mobileAuthUser = document.getElementById('mobileAuthUser');
        const mUserName = document.getElementById('mUserName');
        const mUserAvatar = document.getElementById('mUserAvatar');

        const chatAuthGate = document.getElementById('chatAuthGate');
        const chatActiveContent = document.getElementById('chatActiveContent');
        const chatUserBadge = document.getElementById('chatUserBadge');
        const chatUserBadgeName = document.getElementById('chatUserBadgeName');
        const btnClearChat = document.getElementById('btnClearChat');
        const btnToggleSidebar = document.getElementById('btnToggleSidebar');
        const btnNewChatTop = document.getElementById('btnNewChatTop');

        const shortName = (username || 'Pelajar').split(' ')[0].split('@')[0];

        if (navAuthGroup) navAuthGroup.style.display = 'none';
        if (navUserGroup) navUserGroup.style.display = 'inline-flex';
        if (navUserName) navUserName.textContent = shortName;
        if (navUserAvatar) navUserAvatar.textContent = '👨‍🎓';

        if (mobileAuthGuest) mobileAuthGuest.style.display = 'none';
        if (mobileAuthUser) mobileAuthUser.style.display = 'block';
        if (mUserName) mUserName.textContent = username;
        if (mUserAvatar) mUserAvatar.textContent = '👨‍🎓';

        // Buka akses fitur Tanya AI
        if (chatAuthGate) chatAuthGate.style.display = 'none';
        if (chatActiveContent) chatActiveContent.style.display = 'block';
        if (chatUserBadge) chatUserBadge.style.display = 'inline-flex';
        if (chatUserBadgeName) chatUserBadgeName.textContent = shortName;
        if (btnClearChat) btnClearChat.style.display = 'inline-flex';
        if (btnToggleSidebar) btnToggleSidebar.style.display = 'inline-flex';
        if (btnNewChatTop) btnNewChatTop.style.display = 'inline-flex';
    }

    function tampilkanUILogin() {
        const navAuthGroup = document.getElementById('navAuthGroup');
        const navUserGroup = document.getElementById('navUserGroup');
        const mobileAuthGuest = document.getElementById('mobileAuthGuest');
        const mobileAuthUser = document.getElementById('mobileAuthUser');

        const chatAuthGate = document.getElementById('chatAuthGate');
        const chatActiveContent = document.getElementById('chatActiveContent');
        const chatUserBadge = document.getElementById('chatUserBadge');
        const btnClearChat = document.getElementById('btnClearChat');
        const btnToggleSidebar = document.getElementById('btnToggleSidebar');
        const btnNewChatTop = document.getElementById('btnNewChatTop');

        if (navAuthGroup) navAuthGroup.style.display = 'inline-flex';
        if (navUserGroup) navUserGroup.style.display = 'none';

        if (mobileAuthGuest) mobileAuthGuest.style.display = 'flex';
        if (mobileAuthUser) mobileAuthUser.style.display = 'none';

        // Kunci akses fitur Tanya AI
        if (chatAuthGate) chatAuthGate.style.display = 'block';
        if (chatActiveContent) chatActiveContent.style.display = 'none';
        if (chatUserBadge) chatUserBadge.style.display = 'none';
        if (btnClearChat) btnClearChat.style.display = 'none';
        if (btnToggleSidebar) btnToggleSidebar.style.display = 'none';
        if (btnNewChatTop) btnNewChatTop.style.display = 'none';

        if (chatMessagesEl) chatMessagesEl.innerHTML = '';
    }

    // ==========================================
    // 2. TANYA SAHABAT AI (GEMINI AI INTEGRATION)
    // ==========================================
    const GEMINI_API_KEY = 'AQ.Ab8RN6KEWcb7p_lm0E30qTQ37k_vexdIvobvTzM0bXi_PTPsuw';
    
    const chatMessagesEl = document.getElementById('chatMessages');
    const chatInputEl = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');

    function appendMessage(text, sender = 'bot', isMarkdown = true, customTime = null) {
        if (!chatMessagesEl) return null;
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
        let timeStr = customTime;
        if (!timeStr) {
            const now = new Date();
            timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        }
        time.textContent = timeStr;
        bubble.appendChild(time);

        msgDiv.appendChild(avatar);
        msgDiv.appendChild(bubble);

        chatMessagesEl.appendChild(msgDiv);
        chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;

        return msgDiv;
    }

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

    // Daftar model Gemini Text-out (urut dari kuota Free tier tertinggi: 500 RPD -> 20 RPD)
    const CANDIDATE_MODELS = [
        'gemini-3.5-flash-lite',
        'gemini-3.1-flash-lite',
        'gemini-2.5-flash-lite',
        'gemini-4-hydrogen',
        'gemini-3.8-flash',
        'gemini-3.6-flash',
        'gemini-3-flash',
        'gemini-2.5-flash'
    ];

    const NON_TEXT_MODEL_RE = /(tts|image|embedding|live|robotics|nano-banana|lyria|genie|transcribe|translate|native-audio)/i;

    // Cache daftar model yang valid & cooldown sementara saat high demand (429/503)
    let cachedModelQueue = null;
    let lastWorkingModel = null;
    const modelCooldowns = new Map();

    function isModelOnCooldown(model) {
        const until = modelCooldowns.get(model);
        if (!until) return false;
        if (Date.now() >= until) {
            modelCooldowns.delete(model);
            return false;
        }
        return true;
    }

    function setModelCooldown(model, durationMs) {
        modelCooldowns.set(model, Date.now() + durationMs);
    }

    async function getAvailableModels() {
        if (cachedModelQueue && cachedModelQueue.length > 0) return cachedModelQueue;

        // Coba cek list model dari Google Generative Language API
        try {
            const listRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(GEMINI_API_KEY)}`, {
                headers: { 'x-goog-api-key': GEMINI_API_KEY }
            });

            if (listRes.ok) {
                const listData = await listRes.json();
                if (listData.models && Array.isArray(listData.models)) {
                    const available = listData.models
                        .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
                        .map(m => m.name.replace('models/', ''))
                        .filter(name => !NON_TEXT_MODEL_RE.test(name));

                    // Prioritaskan sesuai urutan CANDIDATE_MODELS, lalu sisa model gemini teks yang tersedia
                    const prioritized = CANDIDATE_MODELS.filter(cand => available.includes(cand));
                    const extras = available.filter(name => name.startsWith('gemini-') && !prioritized.includes(name));
                    const queue = [...prioritized, ...extras];

                    if (queue.length > 0) {
                        cachedModelQueue = queue;
                        console.log('✅ Daftar rotasi model Gemini aktif:', cachedModelQueue);
                        return cachedModelQueue;
                    }
                }
            } else {
                const errJson = await listRes.json().catch(() => ({}));
                console.warn('⚠️ Google API Key / Model Info:', listRes.status, errJson.error ? errJson.error.message : '');
            }
        } catch (e) {
            console.warn('⚠️ Tidak dapat mengecek model list (kemungkinan offline atau koneksi terblokir):', e.message);
        }

        // Default fallback ke daftar kandidat utama
        cachedModelQueue = [...CANDIDATE_MODELS];
        return cachedModelQueue;
    }

    async function callGeminiAPI(userPrompt) {
        const allModels = await getAvailableModels();

        // Susun urutan rotasi: model yang sedang sehat diutamakan, model yang cooldown ditaruh paling akhir sebagai cadangan terakhir
        const readyModels = allModels.filter(m => !isModelOnCooldown(m));
        const cooledModels = allModels.filter(m => isModelOnCooldown(m));
        if (lastWorkingModel && readyModels.includes(lastWorkingModel)) {
            readyModels.splice(readyModels.indexOf(lastWorkingModel), 1);
            readyModels.unshift(lastWorkingModel);
        }
        const modelsToTry = [...readyModels, ...cooledModels];

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

        // 1. Rotasi otomatis ke model berikutnya jika terjadi high demand (503/429) atau error model
        for (const model of modelsToTry) {
            try {
                const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(GEMINI_API_KEY)}`;
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(new Error('Request timeout')), 20000);

                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-goog-api-key': GEMINI_API_KEY
                    },
                    body: JSON.stringify(payload),
                    signal: controller.signal
                });
                clearTimeout(timeoutId);

                if (response.ok) {
                    const data = await response.json();
                    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
                        lastWorkingModel = model;
                        return data.candidates[0].content.parts.map(p => p.text).join('\n');
                    }
                } else {
                    const errData = await response.json().catch(() => ({}));
                    console.warn(`[Gemini API ${response.status}] (${model})`, errData.error ? errData.error.message : response.statusText);

                    if (response.status === 401 || response.status === 403) {
                        // API key tidak valid / akses ditolak — hentikan rotasi
                        break;
                    }
                    if (response.status === 404) {
                        setModelCooldown(model, 10 * 60 * 1000);
                    } else if (response.status === 429 || response.status === 503 || response.status >= 500) {
                        // High demand / rate limit — cooldown 60 detik lalu rotasi ke model berikutnya
                        setModelCooldown(model, 60 * 1000);
                        if (lastWorkingModel === model) lastWorkingModel = null;
                    }
                }
            } catch (err) {
                console.warn(`Gemini API fetch error (${model}):`, err.message);
                if (typeof navigator !== 'undefined' && navigator.onLine === false) {
                    break;
                }
                setModelCooldown(model, 30 * 1000);
                if (lastWorkingModel === model) lastWorkingModel = null;
            }
        }

        // 2. Jika semua model gagal atau koneksi offline, gunakan basis pengetahuan offline P4GN SADAR
        return cariJawabanOffline(userPrompt);
    }

    async function handleSend() {
        if (!chatInputEl) return;
        if (!supabase) return;

        const { data: { session } } = await supabase.auth.getSession();
        if (!session || !session.user) {
            openAuthModal(modalLogin);
            showToast('Silakan masuk terlebih dahulu untuk menggunakan Tanya AI', '🔒');
            return;
        }

        const text = chatInputEl.value.trim();
        if (!text) return;

        // Jika belum ada sesi aktif, buat sesi baru langsung di Supabase DB
        if (!currentSessionId) {
            const previewTitle = text.length > 28 ? (text.slice(0, 28) + '...') : text;
            try {
                const newId = await createSession(previewTitle);
                currentSessionId = newId;
            } catch (e) {
                console.warn('createSession notice:', e);
            }
        }

        appendMessage(text, 'user', false, null);
        chatInputEl.value = '';
        chatSendBtn.disabled = true;

        showTypingIndicator();

        // 1. Simpan pesan user langsung ke Supabase DB
        if (currentSessionId) {
            saveMessage(currentSessionId, 'user', text).catch(e => console.warn('saveMessage error:', e));
        }

        try {
            const reply = await callGeminiAPI(text);
            hideTypingIndicator();
            appendMessage(reply, 'bot', true, null);

            // 2. Simpan pesan bot langsung ke Supabase DB
            if (currentSessionId) {
                saveMessage(currentSessionId, 'bot', reply).catch(e => console.warn('saveMessage bot error:', e));
            }
        } catch (err) {
            hideTypingIndicator();
            const fallback = cariJawabanOffline(text);
            appendMessage(fallback, 'bot', true, null);
            if (currentSessionId) {
                saveMessage(currentSessionId, 'bot', fallback).catch(e => {});
            }
        } finally {
            chatSendBtn.disabled = false;
            chatInputEl.focus();
        }
    }

    if (chatSendBtn) chatSendBtn.addEventListener('click', handleSend);
    if (chatInputEl) {
        chatInputEl.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSend();
            }
        });
    }

    // Tombol + Chat Baru & Sidebar Toggle
    const btnNewChat = document.getElementById('btnNewChat');
    const btnNewChatTop = document.getElementById('btnNewChatTop');
    const btnToggleSidebar = document.getElementById('btnToggleSidebar');
    const chatSidebarBackdrop = document.getElementById('chatSidebarBackdrop');

    if (btnNewChat) btnNewChat.addEventListener('click', buatChatBaru);
    if (btnNewChatTop) btnNewChatTop.addEventListener('click', buatChatBaru);
    if (btnToggleSidebar) btnToggleSidebar.addEventListener('click', toggleMobileSidebar);
    if (chatSidebarBackdrop) chatSidebarBackdrop.addEventListener('click', closeMobileSidebar);

    // Fitur Layar Penuh (Fullscreen) Kotak Chat AI
    const chatContainer = document.getElementById('chatContainer');
    const btnFullscreenChat = document.getElementById('btnFullscreenChat');

    function toggleFullscreenChat() {
        if (!chatContainer) return;
        const isFs = chatContainer.classList.toggle('is-fullscreen');

        if (isFs) {
            document.body.style.overflow = 'hidden';
            if (btnFullscreenChat) {
                btnFullscreenChat.innerHTML = '<span class="fs-icon">🗗</span> <span class="fs-text">Perkecil</span>';
                btnFullscreenChat.title = 'Keluar dari Layar Penuh (Esc)';
            }
        } else {
            document.body.style.overflow = '';
            if (btnFullscreenChat) {
                btnFullscreenChat.innerHTML = '<span class="fs-icon">⛶</span> <span class="fs-text">Layar Penuh</span>';
                btnFullscreenChat.title = 'Perbesar Layar Penuh';
            }
        }
    }

    if (btnFullscreenChat) {
        btnFullscreenChat.addEventListener('click', toggleFullscreenChat);
    }

    // Tombol ESC di keyboard untuk keluar dari mode fullscreen
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatContainer && chatContainer.classList.contains('is-fullscreen')) {
            toggleFullscreenChat();
        }
    });

    // Quick Chips
    window.askQuestion = async function(questionText) {
        if (!supabase) return;
        const { data: { session } } = await supabase.auth.getSession();
        if (!session || !session.user) {
            openAuthModal(modalLogin);
            showToast('Silakan masuk terlebih dahulu untuk menggunakan Tanya AI', '🔒');
            return;
        }
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
            kuisFeedbackEl.innerHTML = `<strong>Jawaban Benar</strong><br>${q.penjelasan}`;
        } else {
            buttons[choiceIdx].classList.add('wrong');
            buttons[q.jawaban].classList.add('correct');
            kuisFeedbackEl.className = 'kuis-feedback-box wrong';
            kuisFeedbackEl.innerHTML = `<strong>Jawaban Kurang Tepat</strong><br>${q.penjelasan}`;
        }

        if (kuisScoreLiveEl) kuisScoreLiveEl.textContent = `Skor: ${kuisScore}`;
        kuisFeedbackEl.style.display = 'block';

        if (kuisIndex < DATA_KUIS.length - 1) {
            kuisNextBtn.textContent = 'Lanjut ➜';
        } else {
            kuisNextBtn.textContent = 'Lihat Hasil Kuis';
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
            kuisFinalTitleEl.textContent = 'Luar Biasa! Nilai Sempurna';
            kuisFinalMsgEl.textContent = 'Kamu memahami konsep edukasi pencegahan narkoba dengan sangat baik. Terus sebarkan kepedulian ini!';
        } else if (kuisScore >= 3) {
            kuisFinalTitleEl.textContent = 'Bagus Sekali!';
            kuisFinalMsgEl.textContent = 'Pemahamanmu tentang edukasi P4GN sudah sangat baik. Baca artikel edukasi untuk wawasan yang lebih lengkap.';
        } else {
            kuisFinalTitleEl.textContent = 'Tetap Semangat!';
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

    // ==========================================
    // 4. FORMULIR KONSELING RAHASIA
    // ==========================================
    const formKonseling = document.getElementById('formKonseling');
    const formSuccessBox = document.getElementById('formSuccessBox');
    const btnIsiLagi = document.getElementById('btnIsiLagi');

    if (formKonseling) {
        formKonseling.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            const kategori = document.getElementById('konselingKategori');
            const topik = document.getElementById('konselingTopik');
            const pesan = document.getElementById('konselingPesan');
            const metodeChecked = formKonseling.querySelector('input[name="konselingMetode"]:checked');

            const errKategori = document.getElementById('errKategori');
            const errTopik = document.getElementById('errTopik');
            const errMetode = document.getElementById('errMetode');
            const errPesan = document.getElementById('errPesan');

            // Reset error
            [errKategori, errTopik, errMetode, errPesan].forEach(el => {
                if (el) { el.textContent = ''; el.classList.remove('show'); }
            });

            if (!kategori.value) {
                if (errKategori) { errKategori.textContent = 'Silakan pilih kategori kamu.'; errKategori.classList.add('show'); }
                isValid = false;
            }

            if (!topik.value) {
                if (errTopik) { errTopik.textContent = 'Silakan pilih topik konsultasi.'; errTopik.classList.add('show'); }
                isValid = false;
            }

            if (!metodeChecked) {
                if (errMetode) { errMetode.textContent = 'Silakan pilih metode kontak yang diinginkan.'; errMetode.classList.add('show'); }
                isValid = false;
            }

            if (!pesan.value.trim() || pesan.value.trim().length < 10) {
                if (errPesan) { errPesan.textContent = 'Pesan minimal 10 karakter agar konselor mendapat gambaran.'; errPesan.classList.add('show'); }
                isValid = false;
            }

            if (!isValid) return;

            formKonseling.style.display = 'none';
            if (formSuccessBox) formSuccessBox.style.display = 'block';
        });
    }

    if (btnIsiLagi) {
        btnIsiLagi.addEventListener('click', function() {
            if (formKonseling) {
                formKonseling.reset();
                formKonseling.style.display = 'block';
            }
            if (formSuccessBox) formSuccessBox.style.display = 'none';
        });
    }

    // ==========================================
    // 5. MANAJEMEN OTENTIKASI & MODAL PENGGUNA
    // ==========================================
    const modalLogin = document.getElementById('modalLogin');
    const modalRegister = document.getElementById('modalRegister');
    const modalHistory = document.getElementById('modalHistory');
    const modalLoginClose = document.getElementById('modalLoginClose');
    const modalRegisterClose = document.getElementById('modalRegisterClose');
    const modalHistoryClose = document.getElementById('modalHistoryClose');
    const btnCloseHistoryModal = document.getElementById('btnCloseHistoryModal');

    function openAuthModal(modalEl) {
        if (!modalEl) return;
        modalEl.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeAuthModal(modalEl) {
        if (!modalEl) return;
        modalEl.classList.remove('open');
        document.body.style.overflow = '';
        const alerts = modalEl.querySelectorAll('.auth-alert');
        alerts.forEach(el => { el.style.display = 'none'; el.textContent = ''; });
    }

    // Tampilkan Modal Riwayat Obrolan Sahabat AI
    async function showHistoryModal() {
        if (!supabase) return;
        const { data: { session } } = await supabase.auth.getSession();
        if (!session || !session.user) {
            openAuthModal(modalLogin);
            showToast('Silakan masuk terlebih dahulu untuk melihat riwayat obrolan.', '🔒');
            return;
        }

        const container = document.getElementById('historyListContainer');
        if (!container) return;

        container.innerHTML = '<div style="text-align: center; padding: 20px; color: #888;">Memuat riwayat obrolan...</div>';
        openAuthModal(modalHistory);

        if (currentSessionId) {
            const messages = await loadChatHistory(currentSessionId);
            container.innerHTML = '';
            if (messages && Array.isArray(messages) && messages.length > 0) {
                messages.forEach(msg => {
                    const isUser = (msg.role === 'user' || msg.p_role === 'user' || msg.sender === 'user');
                    const text = msg.plain_text || msg.p_plain_text || msg.text || msg.content || '';
                    const time = msg.time || (msg.created_at ? new Date(msg.created_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : '');
                    const itemDiv = document.createElement('div');
                    itemDiv.className = `history-item ${isUser ? 'user' : 'bot'}`;
                    itemDiv.innerHTML = `
                        <div class="history-item-header">
                            <span>${isUser ? '👤 Anda (Pelajar)' : '🍡 Sahabat AI SADAR'}</span>
                            <span style="font-size: 0.72rem; color: #888;">${time}</span>
                        </div>
                        <div style="color: #333; font-size: 0.84rem; white-space: pre-wrap;">${text}</div>
                    `;
                    container.appendChild(itemDiv);
                });
                return;
            }
        }

        container.innerHTML = `
            <div style="text-align: center; padding: 35px 20px; color: #777;">
                <div style="font-size: 2.2rem; margin-bottom: 8px;">💬</div>
                <h4 style="margin: 0 0 6px 0; color: #444;">Belum Ada Riwayat Obrolan</h4>
                <p style="font-size: 0.85rem; margin: 0;">Mulai percakapan dengan bertanya ke <strong>Sahabat AI SADAR</strong> di bawah.</p>
            </div>
        `;
    }

    // Tombol pembuka modal
    const btnOpenLogin = document.getElementById('btnOpenLogin');
    const btnOpenRegister = document.getElementById('btnOpenRegister');
    const mBtnOpenLogin = document.getElementById('mBtnOpenLogin');
    const mBtnOpenRegister = document.getElementById('mBtnOpenRegister');
    const btnGateLogin = document.getElementById('btnGateLogin');
    const btnGateRegister = document.getElementById('btnGateRegister');
    const btnGateDemo = document.getElementById('btnGateDemo');
    const btnOpenHistory = document.getElementById('btnOpenHistory');

    [btnOpenLogin, mBtnOpenLogin, btnGateLogin].forEach(btn => {
        if (btn) btn.addEventListener('click', () => {
            if (window.closeMobileMenu) window.closeMobileMenu();
            openAuthModal(modalLogin);
        });
    });

    [btnOpenRegister, mBtnOpenRegister, btnGateRegister].forEach(btn => {
        if (btn) btn.addEventListener('click', () => {
            if (window.closeMobileMenu) window.closeMobileMenu();
            openAuthModal(modalRegister);
        });
    });

    if (btnOpenHistory) {
        btnOpenHistory.addEventListener('click', showHistoryModal);
    }

    if (modalLoginClose) modalLoginClose.addEventListener('click', () => closeAuthModal(modalLogin));
    if (modalRegisterClose) modalRegisterClose.addEventListener('click', () => closeAuthModal(modalRegister));
    if (modalHistoryClose) modalHistoryClose.addEventListener('click', () => closeAuthModal(modalHistory));
    if (btnCloseHistoryModal) btnCloseHistoryModal.addEventListener('click', () => closeAuthModal(modalHistory));

    [modalLogin, modalRegister, modalHistory].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeAuthModal(modal);
            });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalLogin && modalLogin.classList.contains('open')) closeAuthModal(modalLogin);
            if (modalRegister && modalRegister.classList.contains('open')) closeAuthModal(modalRegister);
            if (modalHistory && modalHistory.classList.contains('open')) closeAuthModal(modalHistory);
        }
    });

    const linkSwitchToRegister = document.getElementById('linkSwitchToRegister');
    const linkSwitchToLogin = document.getElementById('linkSwitchToLogin');
    if (linkSwitchToRegister) {
        linkSwitchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            closeAuthModal(modalLogin);
            openAuthModal(modalRegister);
        });
    }
    if (linkSwitchToLogin) {
        linkSwitchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeAuthModal(modalRegister);
            openAuthModal(modalLogin);
        });
    }

    // Toggle Lihat/Sembunyikan Sandi
    const toggleLoginPwd = document.getElementById('toggleLoginPwd');
    const loginPassword = document.getElementById('loginPassword');
    if (toggleLoginPwd && loginPassword) {
        toggleLoginPwd.addEventListener('click', () => {
            const isPwd = loginPassword.type === 'password';
            loginPassword.type = isPwd ? 'text' : 'password';
            toggleLoginPwd.textContent = isPwd ? 'Sembunyikan' : 'Lihat';
        });
    }

    const toggleRegPwd = document.getElementById('toggleRegPwd');
    const regPassword = document.getElementById('regPassword');
    if (toggleRegPwd && regPassword) {
        toggleRegPwd.addEventListener('click', () => {
            const isPwd = regPassword.type === 'password';
            regPassword.type = isPwd ? 'text' : 'password';
            toggleRegPwd.textContent = isPwd ? 'Sembunyikan' : 'Lihat';
        });
    }

    // Submit Form: Login (Murni Supabase Auth & DB)
    const formLogin = document.getElementById('formLogin');
    const loginAlertError = document.getElementById('loginAlertError');
    const loginAlertSuccess = document.getElementById('loginAlertSuccess');
    if (formLogin) {
        formLogin.addEventListener('submit', async function(e) {
            e.preventDefault();
            if (loginAlertError) loginAlertError.style.display = 'none';
            if (loginAlertSuccess) loginAlertSuccess.style.display = 'none';

            const identifier = document.getElementById('loginIdentifier').value.trim();
            const password = document.getElementById('loginPassword').value;

            if (!identifier || !password) {
                if (loginAlertError) {
                    loginAlertError.textContent = 'Harap masukkan username/email dan kata sandi.';
                    loginAlertError.style.display = 'block';
                }
                return;
            }

            const submitBtn = formLogin.querySelector('button[type="submit"]');
            const origBtnHtml = submitBtn ? submitBtn.innerHTML : '';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = 'Memproses masuk...';
            }

            try {
                await loginUser(identifier, password);
                if (loginAlertSuccess) {
                    loginAlertSuccess.textContent = 'Berhasil masuk! Selamat datang.';
                    loginAlertSuccess.style.display = 'block';
                }
                setTimeout(() => {
                    closeAuthModal(modalLogin);
                    formLogin.reset();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origBtnHtml;
                    }
                }, 400);
            } catch (err) {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origBtnHtml;
                }
                if (loginAlertError) {
                    loginAlertError.textContent = formatAuthErrorMessage(err, 'Email atau kata sandi tidak cocok di database.');
                    loginAlertError.style.display = 'block';
                }
            }
        });
    }

    // Submit Form: Register (Murni Supabase Auth & DB)
    const formRegister = document.getElementById('formRegister');
    const regAlertError = document.getElementById('regAlertError');
    const regAlertSuccess = document.getElementById('regAlertSuccess');
    if (formRegister) {
        formRegister.addEventListener('submit', async function(e) {
            e.preventDefault();
            if (regAlertError) regAlertError.style.display = 'none';
            if (regAlertSuccess) regAlertSuccess.style.display = 'none';

            const name = document.getElementById('regName').value.trim();
            const username = document.getElementById('regUsername').value.trim().toLowerCase();
            const email = document.getElementById('regEmail').value.trim().toLowerCase();
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('regConfirmPassword').value;

            if (name.length < 2) {
                if (regAlertError) { regAlertError.textContent = 'Nama lengkap minimal 2 karakter.'; regAlertError.style.display = 'block'; }
                return;
            }
            if (username.length < 3) {
                if (regAlertError) { regAlertError.textContent = 'Username minimal 3 karakter.'; regAlertError.style.display = 'block'; }
                return;
            }
            if (!email.includes('@') || !email.includes('.')) {
                if (regAlertError) { regAlertError.textContent = 'Format alamat email tidak valid.'; regAlertError.style.display = 'block'; }
                return;
            }
            if (password.length < 6) {
                if (regAlertError) { regAlertError.textContent = 'Kata sandi minimal 6 karakter.'; regAlertError.style.display = 'block'; }
                return;
            }
            if (password !== confirmPassword) {
                if (regAlertError) { regAlertError.textContent = 'Konfirmasi kata sandi tidak cocok.'; regAlertError.style.display = 'block'; }
                return;
            }

            const submitBtn = formRegister.querySelector('button[type="submit"]');
            const origBtnHtml = submitBtn ? submitBtn.innerHTML : '';
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span>⏳</span> Mendaftarkan ke database...';
            }

            try {
                const regResult = await registerUser(email, password, username);
                const needsEmailConfirm = regResult && !regResult.session;
                if (regAlertSuccess) {
                    regAlertSuccess.textContent = needsEmailConfirm
                        ? `Pendaftaran berhasil! Cek email (${email}) untuk konfirmasi akun sebelum masuk.`
                        : `Pendaftaran berhasil! Akun ${username} siap digunakan.`;
                    regAlertSuccess.style.display = 'block';
                }
                setTimeout(() => {
                    closeAuthModal(modalRegister);
                    formRegister.reset();
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = origBtnHtml;
                    }
                    showToast(
                        needsEmailConfirm
                            ? `Cek email ${email} untuk konfirmasi akun.`
                            : `Pendaftaran berhasil! Halo, ${name}.`,
                        '✓'
                    );
                }, needsEmailConfirm ? 1600 : 600);
            } catch (err) {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = origBtnHtml;
                }
                if (regAlertError) {
                    regAlertError.textContent = formatAuthErrorMessage(err, 'Pendaftaran gagal di database.');
                    regAlertError.style.display = 'block';
                }
            }
        });
    }

    // Logout (Murni Supabase Auth)
    async function handleLogout() {
        if (!confirm('Apakah kamu yakin ingin keluar dari akun?')) return;
        if (supabase) {
            try {
                await supabase.auth.signOut();
                showToast('Kamu telah keluar dari akun.', '✓');
            } catch (e) {
                console.warn('Sign out notice:', e);
            }
        }
    }

    const btnLogout = document.getElementById('btnLogout');
    const mBtnLogout = document.getElementById('mBtnLogout');
    if (btnLogout) btnLogout.addEventListener('click', handleLogout);
    if (mBtnLogout) mBtnLogout.addEventListener('click', () => {
        if (window.closeMobileMenu) window.closeMobileMenu();
        handleLogout();
    });

    // Clear / Reset Obrolan
    const btnClearChat = document.getElementById('btnClearChat');
    if (btnClearChat) {
        btnClearChat.addEventListener('click', function() {
            buatChatBaru();
        });
    }

    // Auth State Listener: Seluruh otentikasi & riwayat chat murni dari database Supabase
    if (supabase) {
        supabase.auth.onAuthStateChange(async (event, session) => {
            if (session && session.user) {
                // 1. Ambil username dari metadata auth atau tabel profiles di DB
                let username = session.user.user_metadata?.username || (session.user.email ? session.user.email.split('@')[0] : 'Pelajar SADAR');
                try {
                    const { data: profile, error } = await supabase
                        .from('profiles')
                        .select('username')
                        .eq('id', session.user.id)
                        .maybeSingle();

                    if (!error && profile && profile.username) {
                        username = profile.username;
                    }
                } catch (e) {
                    console.warn('Profile fetch notice:', e);
                }

                tampilkanUIUtama(username);

                // 2. Muat daftar sesi obrolan pengguna dari database
                await loadUserSessions();

                // 3. Ambil atau buat sesi chat aktif, lalu muat riwayat pesan
                const sessionId = await getOrCreateUserSession();
                currentSessionId = sessionId;

                if (sessionId) {
                    const messages = await loadChatHistory(sessionId);
                    renderChatKeLayar(messages || []);
                } else {
                    renderChatKeLayar([]);
                }
            } else {
                // Tidak ada sesi aktif -> tampilkan form login
                currentSessionId = null;
                tampilkanUILogin();
            }
        });
    } else {
        tampilkanUILogin();
    }
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
        btn.addEventListener('click', function() {
            const titleAttr = this.getAttribute('title');
            if (titleAttr && moodTexts[titleAttr] && moodCardTitle && moodCardDesc) {
                moodCardTitle.textContent = moodTexts[titleAttr].title;
                moodCardDesc.textContent = moodTexts[titleAttr].desc;
            }
        });
    });

})();

