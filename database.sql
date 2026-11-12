-- ====================================================================
-- SISTEM DATABASE SADAR (Sarana Edukasi dan Deteksi Anti Narkoba)
-- Tema: Edukasi & Pencegahan Narkoba P4GN (PjBL Kelas XI RPL)
-- Kompatibel: MySQL, MariaDB, phpMyAdmin, SQLite
-- ====================================================================

CREATE DATABASE IF NOT EXISTS `sadar_p4gn_db` 
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `sadar_p4gn_db`;

-- --------------------------------------------------------------------
-- 1. TABEL PENGGUNA (users)
-- Menyimpan data otentikasi registrasi dan login akun pengguna/pelajar
-- --------------------------------------------------------------------
DROP TABLE IF EXISTS `chat_history`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL COMMENT 'Nama lengkap pengguna/pelajar',
    `username` VARCHAR(50) NOT NULL UNIQUE COMMENT 'Username unik akun',
    `email` VARCHAR(100) NOT NULL UNIQUE COMMENT 'Alamat email valid',
    `password` VARCHAR(255) NOT NULL COMMENT 'Hash password terenkripsi SHA-256',
    `role` ENUM('pelajar', 'konselor', 'guru', 'admin') DEFAULT 'pelajar' COMMENT 'Peran dalam aplikasi',
    `avatar` VARCHAR(50) DEFAULT '👤' COMMENT 'Ikon profil pengguna',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Waktu pendaftaran',
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Indeks untuk pencarian cepat saat login
CREATE INDEX `idx_users_login` ON `users` (`username`, `email`);

-- --------------------------------------------------------------------
-- 2. TABEL RIWAYAT OBROLAN SAHABAT AI (chat_history)
-- Menyimpan log percakapan tanya-jawab antara pengguna dan Sahabat AI
-- --------------------------------------------------------------------
CREATE TABLE `chat_history` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NULL COMMENT 'ID pengguna terdaftar (NULL jika tamu/guest)',
    `sender` ENUM('user', 'bot') NOT NULL COMMENT 'Pengirim pesan (user = siswa, bot = AI)',
    `message` TEXT NOT NULL COMMENT 'Isi teks pesan percakapan',
    `time` VARCHAR(10) NOT NULL COMMENT 'Format waktu jam:menit (misal: 14:30)',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Timestamp pengiriman pesan',
    CONSTRAINT `fk_chat_user` 
        FOREIGN KEY (`user_id`) 
        REFERENCES `users` (`id`) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Indeks untuk mempercepat pemuatan riwayat percakapan per pengguna
CREATE INDEX `idx_chat_history_user` ON `chat_history` (`user_id`, `created_at`);

-- --------------------------------------------------------------------
-- 3. DATA AWAL (SEEDED DEMO DATA)
-- Akun dan percakapan contoh untuk demonstrasi pengujian PjBL
-- --------------------------------------------------------------------

-- Contoh Akun Pelajar Terdaftar
-- Password 'pelajar123' ter-hash dengan salt SADAR 2026
INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `role`, `avatar`, `created_at`) VALUES
(1, 'Siswa Contoh SADAR', 'pelajar_sadar', 'pelajar@sadar.id', 'fb_5832a419_hash', 'pelajar', '🎓', '2026-11-12 08:00:00'),
(2, 'Muhammad Rizky', 'rizky_rpl', 'rizky@smk.sch.id', 'fb_7219c084_hash', 'pelajar', '🌟', '2026-11-12 09:15:00');

-- Contoh Riwayat Chat AI Tersimpan
INSERT INTO `chat_history` (`user_id`, `sender`, `message`, `time`, `created_at`) VALUES
(1, 'user', 'Halo! Apa itu program P4GN yang sering disosialisasikan di sekolah?', '08:01', '2026-11-12 08:01:00'),
(1, 'bot', 'Halo! P4GN adalah singkatan dari **Pencegahan dan Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika** yang dipelopori BNN RI. Tujuannya adalah membentengi generasi muda agar memiliki daya tangkal yang kuat terhadap bahaya narkoba.', '08:01', '2026-11-12 08:01:05'),
(1, 'user', 'Bagaimana cara menolak ajakan zat berbahaya jika teman sebaya memaksa?', '08:02', '2026-11-12 08:02:00'),
(1, 'bot', 'Gunakan teknik komunikasi asertif:\n1. Tatap mata dengan tenang.\n2. Katakan "Tidak, aku sayang masa depanku".\n3. Alihkan topik kegiatan positif atau tinggalkan situasi berisiko.', '08:02', '2026-11-12 08:02:06');

-- Selesai

