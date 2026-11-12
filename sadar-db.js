/**
 * SADAR (Sarana Edukasi dan Deteksi Anti Narkoba)
 * Database Layer: User Authentication (Register/Login) & AI Chat History
 * Platform: Dual Engine — MySQL XAMPP (via api.php) & IndexedDB / LocalStorage Fallback
 * Proyek: PjBL Kelas XI RPL
 */

(function (window) {
    'use strict';

    const DB_NAME = 'SadarP4GN_DB';
    const DB_VERSION = 1;
    const LS_USERS_KEY = 'sadar_users_db';
    const LS_CHAT_KEY = 'sadar_chat_history_db';
    const LS_SESSION_KEY = 'sadar_active_session';

    // Helper Hashing Password (SHA-256 via Web Crypto API dengan fallback aman)
    async function hashPassword(plainText) {
        if (window.crypto && window.crypto.subtle) {
            try {
                const encoder = new TextEncoder();
                const data = encoder.encode(plainText + '_sadar_salt_2026');
                const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            } catch (e) {
                console.warn('SubtleCrypto fallback:', e);
            }
        }
        let hash = 0;
        const str = plainText + '_sadar_salt_2026';
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash |= 0;
        }
        return 'fb_' + Math.abs(hash).toString(16) + '_hash';
    }

    function getLS(key, defaultValue) {
        try {
            const val = localStorage.getItem(key);
            return val ? JSON.parse(val) : defaultValue;
        } catch (e) {
            return defaultValue;
        }
    }

    function setLS(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('LocalStorage error:', e);
        }
    }

    class SadarDatabase {
        constructor() {
            this.db = null;
            this.useMySQL = false;
            this.isReady = false;
            this.initPromise = this.init();
        }

        async init() {
            // 1. Cek apakah berjalan di server XAMPP (http:// atau https://)
            const isHttp = window.location.protocol === 'http:' || window.location.protocol === 'https:';
            if (isHttp) {
                try {
                    const pingRes = await fetch('api.php?action=ping');
                    if (pingRes.ok) {
                        const pingData = await pingRes.json();
                        if (pingData.success) {
                            this.useMySQL = true;
                            console.log('✅ SADAR Database: Terhubung ke MySQL XAMPP via api.php');
                            this.isReady = true;
                            return;
                        }
                    }
                } catch (e) {
                    console.log('ℹ️ MySQL XAMPP tidak merespon, beralih ke IndexedDB/LocalStorage.');
                }
            }

            // 2. Inisialisasi IndexedDB sebagai storage browser lokal
            return new Promise((resolve) => {
                if (!window.indexedDB) {
                    this.isReady = true;
                    this._seedDefaultUsers();
                    resolve(null);
                    return;
                }

                const request = window.indexedDB.open(DB_NAME, DB_VERSION);

                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    if (!db.objectStoreNames.contains('users')) {
                        const userStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
                        userStore.createIndex('email', 'email', { unique: true });
                        userStore.createIndex('username', 'username', { unique: true });
                    }
                    if (!db.objectStoreNames.contains('chat_history')) {
                        const chatStore = db.createObjectStore('chat_history', { keyPath: 'id', autoIncrement: true });
                        chatStore.createIndex('userId', 'userId', { unique: false });
                        chatStore.createIndex('timestamp', 'timestamp', { unique: false });
                    }
                    if (!db.objectStoreNames.contains('sessions')) {
                        db.createObjectStore('sessions', { keyPath: 'key' });
                    }
                };

                request.onsuccess = (event) => {
                    this.db = event.target.result;
                    this.isReady = true;
                    this._seedDefaultUsers();
                    resolve(this.db);
                };

                request.onerror = () => {
                    this.isReady = true;
                    this._seedDefaultUsers();
                    resolve(null);
                };
            });
        }

        async _seedDefaultUsers() {
            const users = await this.getAllUsers();
            if (users.length === 0) {
                const passHash = await hashPassword('pelajar123');
                const defaultUser = {
                    name: 'Siswa Contoh SADAR',
                    username: 'pelajar_sadar',
                    email: 'pelajar@sadar.id',
                    password: passHash,
                    role: 'pelajar',
                    createdAt: new Date().toISOString()
                };

                if (this.db) {
                    try {
                        const tx = this.db.transaction('users', 'readwrite');
                        tx.objectStore('users').add(defaultUser);
                    } catch (e) {
                        // ignore
                    }
                }
                const lsUsers = getLS(LS_USERS_KEY, []);
                if (lsUsers.length === 0) {
                    defaultUser.id = 1;
                    setLS(LS_USERS_KEY, [defaultUser]);
                }
            }
        }

        async getAllUsers() {
            await this.initPromise;
            if (this.db) {
                return new Promise((resolve) => {
                    try {
                        const tx = this.db.transaction('users', 'readonly');
                        const store = tx.objectStore('users');
                        const req = store.getAll();
                        req.onsuccess = () => resolve(req.result || []);
                        req.onerror = () => resolve(getLS(LS_USERS_KEY, []));
                    } catch (e) {
                        resolve(getLS(LS_USERS_KEY, []));
                    }
                });
            }
            return getLS(LS_USERS_KEY, []);
        }

        // ==========================================
        // 1. REGISTER
        // ==========================================
        async register({ name, username, email, password }) {
            await this.initPromise;

            // Jika MySQL XAMPP aktif, simpan langsung ke MySQL via api.php
            if (this.useMySQL) {
                try {
                    const res = await fetch('api.php?action=register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, username, email, password })
                    });
                    const data = await res.json();
                    if (data.success && data.user) {
                        this._setActiveSession(data.user);
                    }
                    return data;
                } catch (e) {
                    console.warn('Gagal koneksi MySQL api.php, beralih ke IndexedDB:', e);
                }
            }

            // Fallback Engine: IndexedDB & LocalStorage
            const cleanName = (name || '').trim();
            const cleanUsername = (username || '').trim().toLowerCase();
            const cleanEmail = (email || '').trim().toLowerCase();
            const cleanPassword = password || '';

            if (!cleanName || cleanName.length < 3) return { success: false, message: 'Nama lengkap minimal 3 karakter.' };
            if (!cleanUsername || cleanUsername.length < 4 || !/^[a-zA-Z0-9_]+$/.test(cleanUsername)) {
                return { success: false, message: 'Username minimal 4 karakter (hanya huruf, angka, garis bawah).' };
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!cleanEmail || !emailRegex.test(cleanEmail)) return { success: false, message: 'Format email tidak valid.' };
            if (!cleanPassword || cleanPassword.length < 6) return { success: false, message: 'Kata sandi minimal 6 karakter.' };

            const allUsers = await this.getAllUsers();
            if (allUsers.some(u => (u.email || '').toLowerCase() === cleanEmail)) {
                return { success: false, message: 'Email sudah terdaftar! Silakan gunakan email lain atau masuk.' };
            }
            if (allUsers.some(u => (u.username || '').toLowerCase() === cleanUsername)) {
                return { success: false, message: 'Username sudah digunakan. Pilih username lain.' };
            }

            const hashedPassword = await hashPassword(cleanPassword);
            const newUser = {
                name: cleanName,
                username: cleanUsername,
                email: cleanEmail,
                password: hashedPassword,
                role: 'pelajar',
                createdAt: new Date().toISOString()
            };

            let savedId = Date.now();
            if (this.db) {
                try {
                    await new Promise((resolve, reject) => {
                        const tx = this.db.transaction('users', 'readwrite');
                        const store = tx.objectStore('users');
                        const req = store.add(newUser);
                        req.onsuccess = (e) => { savedId = e.target.result; newUser.id = savedId; resolve(); };
                        req.onerror = (e) => reject(e);
                    });
                } catch (err) {
                    // ignore
                }
            }

            const lsUsers = getLS(LS_USERS_KEY, []);
            newUser.id = savedId;
            lsUsers.push(newUser);
            setLS(LS_USERS_KEY, lsUsers);

            const sessionUser = {
                id: newUser.id,
                name: newUser.name,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            };
            this._setActiveSession(sessionUser);

            return {
                success: true,
                message: `Pendaftaran berhasil! Selamat datang di SADAR, ${newUser.name}.`,
                user: sessionUser
            };
        }

        // ==========================================
        // 2. LOGIN
        // ==========================================
        async login(identifier, password) {
            await this.initPromise;

            // Jika MySQL XAMPP aktif, autentikasi via MySQL
            if (this.useMySQL) {
                try {
                    const res = await fetch('api.php?action=login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ identifier, password })
                    });
                    const data = await res.json();
                    if (data.success && data.user) {
                        this._setActiveSession(data.user);
                    }
                    return data;
                } catch (e) {
                    console.warn('Gagal login MySQL api.php, beralih ke IndexedDB:', e);
                }
            }

            // Fallback Engine: IndexedDB & LocalStorage
            const cleanId = (identifier || '').trim().toLowerCase();
            const cleanPassword = password || '';

            if (!cleanId) return { success: false, message: 'Silakan isi username atau email kamu.' };
            if (!cleanPassword) return { success: false, message: 'Silakan isi kata sandi.' };

            const allUsers = await this.getAllUsers();
            const user = allUsers.find(u => 
                (u.email && u.email.toLowerCase() === cleanId) || 
                (u.username && u.username.toLowerCase() === cleanId)
            );

            if (!user) return { success: false, message: 'Akun tidak ditemukan. Periksa kembali username/email.' };

            const inputHash = await hashPassword(cleanPassword);
            if (user.password !== inputHash) return { success: false, message: 'Kata sandi salah. Silakan coba lagi.' };

            const sessionUser = {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                role: user.role || 'pelajar'
            };
            this._setActiveSession(sessionUser);

            return {
                success: true,
                message: `Berhasil masuk! Senang melihatmu kembali, ${user.name}.`,
                user: sessionUser
            };
        }

        _setActiveSession(user) {
            setLS(LS_SESSION_KEY, user);
            if (this.db) {
                try {
                    const tx = this.db.transaction('sessions', 'readwrite');
                    tx.objectStore('sessions').put({ key: 'currentUser', user: user, loggedAt: new Date().toISOString() });
                } catch (e) {
                    // ignore
                }
            }
        }

        // ==========================================
        // 3. LOGOUT & CURRENT USER
        // ==========================================
        async logout() {
            if (this.useMySQL) {
                try {
                    await fetch('api.php?action=logout');
                } catch (e) {
                    // ignore
                }
            }
            setLS(LS_SESSION_KEY, null);
            if (this.db) {
                try {
                    const tx = this.db.transaction('sessions', 'readwrite');
                    tx.objectStore('sessions').delete('currentUser');
                } catch (e) {
                    // ignore
                }
            }
        }

        getCurrentUser() {
            return getLS(LS_SESSION_KEY, null);
        }

        // ==========================================
        // 4. RIWAYAT CHAT AI (History Chat)
        // ==========================================
        async saveChatMessage({ userId, sender, message, time }) {
            await this.initPromise;

            const uId = userId || 'guest';
            const now = new Date();
            const timeStr = time || `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

            // Jika MySQL XAMPP aktif, simpan ke tabel chat_history di MySQL
            if (this.useMySQL) {
                try {
                    const res = await fetch('api.php?action=save_chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ userId: uId, sender, message, time: timeStr })
                    });
                    if (res.ok) {
                        return await res.json();
                    }
                } catch (e) {
                    console.warn('Gagal simpan chat ke MySQL api.php, simpan ke lokal:', e);
                }
            }

            // Fallback IndexedDB & LocalStorage
            const item = {
                userId: uId,
                sender: sender,
                message: message,
                time: timeStr,
                timestamp: now.toISOString()
            };

            let savedId = Date.now();
            if (this.db) {
                try {
                    await new Promise((resolve) => {
                        const tx = this.db.transaction('chat_history', 'readwrite');
                        const store = tx.objectStore('chat_history');
                        const req = store.add(item);
                        req.onsuccess = (e) => { savedId = e.target.result; item.id = savedId; resolve(); };
                        req.onerror = () => resolve();
                    });
                } catch (e) {
                    // ignore
                }
            }

            item.id = savedId;
            const lsChats = getLS(LS_CHAT_KEY, []);
            lsChats.push(item);
            if (lsChats.length > 500) lsChats.shift();
            setLS(LS_CHAT_KEY, lsChats);

            return item;
        }

        async getChatHistory(userId) {
            await this.initPromise;
            const targetId = userId || 'guest';

            // Jika MySQL XAMPP aktif, ambil data dari tabel chat_history MySQL
            if (this.useMySQL) {
                try {
                    const res = await fetch(`api.php?action=get_chat&user_id=${encodeURIComponent(targetId)}`);
                    if (res.ok) {
                        const json = await res.json();
                        if (json.success && Array.isArray(json.data)) {
                            return json.data;
                        }
                    }
                } catch (e) {
                    console.warn('Gagal ambil chat dari MySQL api.php, ambil dari lokal:', e);
                }
            }

            // Fallback IndexedDB
            if (this.db) {
                try {
                    const messages = await new Promise((resolve) => {
                        const tx = this.db.transaction('chat_history', 'readonly');
                        const store = tx.objectStore('chat_history');
                        const index = store.index('userId');
                        const req = index.getAll(targetId);
                        req.onsuccess = () => resolve(req.result || []);
                        req.onerror = () => resolve(null);
                    });

                    if (messages && messages.length > 0) {
                        return messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
                    }
                } catch (e) {
                    // ignore
                }
            }

            const lsChats = getLS(LS_CHAT_KEY, []);
            return lsChats
                .filter(c => String(c.userId) === String(targetId))
                .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        }

        async clearChatHistory(userId) {
            await this.initPromise;
            const targetId = userId || 'guest';

            // Jika MySQL XAMPP aktif, hapus dari MySQL
            if (this.useMySQL) {
                try {
                    await fetch('api.php?action=clear_chat', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ userId: targetId })
                    });
                } catch (e) {
                    // ignore
                }
            }

            // Fallback IndexedDB
            if (this.db) {
                try {
                    const tx = this.db.transaction('chat_history', 'readwrite');
                    const store = tx.objectStore('chat_history');
                    const index = store.index('userId');
                    const req = index.openCursor(IDBKeyRange.only(targetId));
                    req.onsuccess = (event) => {
                        const cursor = event.target.result;
                        if (cursor) {
                            cursor.delete();
                            cursor.continue();
                        }
                    };
                } catch (e) {
                    // ignore
                }
            }

            const lsChats = getLS(LS_CHAT_KEY, []);
            const filtered = lsChats.filter(c => String(c.userId) !== String(targetId));
            setLS(LS_CHAT_KEY, filtered);
            return true;
        }

        async countChatHistory(userId) {
            const list = await this.getChatHistory(userId);
            return list.length;
        }
    }

    window.SadarDB = new SadarDatabase();

})(window);
