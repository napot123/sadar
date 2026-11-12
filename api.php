<?php
/**
 * SADAR - Sarana Edukasi dan Deteksi Anti Narkoba
 * File: api.php
 * Endpoint Backend API untuk Registrasi, Login, dan Riwayat Chat AI
 * Menggunakan Database MySQL XAMPP
 * PjBL Kelas XI RPL
 */

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once 'koneksi.php';

// Helper membaca input JSON atau POST biasa
function getRequestData() {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    if (is_array($data)) {
        return $data;
    }
    return $_POST;
}

$action = isset($_GET['action']) ? $_GET['action'] : '';
$data = getRequestData();

switch ($action) {

    // ==========================================
    // 0. PING / TEST KONEKSI MYSQL
    // ==========================================
    case 'ping':
        echo json_encode([
            'success' => true,
            'status'  => 'online',
            'message' => 'Backend PHP & MySQL XAMPP aktif dan terhubung.'
        ]);
        break;

    // ==========================================
    // 1. REGISTER (Pendaftaran Akun Baru)
    // ==========================================
    case 'register':
        $name     = trim(isset($data['name']) ? $data['name'] : '');
        $username = strtolower(trim(isset($data['username']) ? $data['username'] : ''));
        $email    = strtolower(trim(isset($data['email']) ? $data['email'] : ''));
        $password = isset($data['password']) ? $data['password'] : '';

        // Validasi input
        if (strlen($name) < 3) {
            echo json_encode(['success' => false, 'message' => 'Nama lengkap minimal 3 karakter.']);
            exit;
        }
        if (strlen($username) < 4 || !preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
            echo json_encode(['success' => false, 'message' => 'Username minimal 4 karakter (hanya huruf, angka, garis bawah).']);
            exit;
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(['success' => false, 'message' => 'Format email tidak valid.']);
            exit;
        }
        if (strlen($password) < 6) {
            echo json_encode(['success' => false, 'message' => 'Kata sandi minimal 6 karakter.']);
            exit;
        }

        // Cek duplikasi email / username
        $checkStmt = $conn->prepare("SELECT id FROM users WHERE email = ? OR username = ? LIMIT 1");
        $checkStmt->bind_param("ss", $email, $username);
        $checkStmt->execute();
        $checkRes = $checkStmt->get_result();

        if ($checkRes->num_rows > 0) {
            echo json_encode(['success' => false, 'message' => 'Email atau Username sudah terdaftar di database MySQL. Silakan gunakan yang lain.']);
            exit;
        }

        // Enkripsi password
        $hashed = password_hash($password, PASSWORD_DEFAULT);
        $role   = 'pelajar';
        $avatar = '🎓';

        $insertStmt = $conn->prepare("INSERT INTO users (name, username, email, password, role, avatar) VALUES (?, ?, ?, ?, ?, ?)");
        $insertStmt->bind_param("ssssss", $name, $username, $email, $hashed, $role, $avatar);

        if ($insertStmt->execute()) {
            $newId = $insertStmt->insert_id;
            $userSession = [
                'id'       => $newId,
                'name'     => $name,
                'username' => $username,
                'email'    => $email,
                'role'     => $role,
                'avatar'   => $avatar
            ];
            $_SESSION['sadar_user'] = $userSession;

            echo json_encode([
                'success' => true,
                'message' => "Pendaftaran berhasil disimpan ke database MySQL! Selamat datang, {$name}.",
                'user'    => $userSession
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Gagal menyimpan data ke database: ' . $conn->error]);
        }
        break;

    // ==========================================
    // 2. LOGIN (Masuk ke Akun)
    // ==========================================
    case 'login':
        $identifier = strtolower(trim(isset($data['identifier']) ? $data['identifier'] : ''));
        $password   = isset($data['password']) ? $data['password'] : '';

        if (empty($identifier) || empty($password)) {
            echo json_encode(['success' => false, 'message' => 'Username/email dan kata sandi wajib diisi.']);
            exit;
        }

        $stmt = $conn->prepare("SELECT id, name, username, email, password, role, avatar FROM users WHERE username = ? OR email = ? LIMIT 1");
        $stmt->bind_param("ss", $identifier, $identifier);
        $stmt->execute();
        $res = $stmt->get_result();

        if ($res->num_rows === 0) {
            echo json_encode(['success' => false, 'message' => 'Akun tidak ditemukan di database. Pastikan username/email sudah benar.']);
            exit;
        }

        $row = $res->fetch_assoc();

        // Verifikasi password (mendukung password_hash dan fallback sha256 demo)
        $isMatch = password_verify($password, $row['password']);
        if (!$isMatch) {
            // Cek jika akun demo yang ter-seed dengan salt khusus
            if ($password === 'pelajar123' && strpos($row['password'], 'fb_') === 0) {
                $isMatch = true;
            }
        }

        if ($isMatch) {
            $userSession = [
                'id'       => (int)$row['id'],
                'name'     => $row['name'],
                'username' => $row['username'],
                'email'    => $row['email'],
                'role'     => $row['role'],
                'avatar'   => $row['avatar'] ? $row['avatar'] : '👤'
            ];
            $_SESSION['sadar_user'] = $userSession;

            echo json_encode([
                'success' => true,
                'message' => "Berhasil masuk ke database MySQL! Selamat datang, {$row['name']}.",
                'user'    => $userSession
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Kata sandi salah. Silakan coba lagi.']);
        }
        break;

    // ==========================================
    // 3. LOGOUT & GET CURRENT USER
    // ==========================================
    case 'logout':
        unset($_SESSION['sadar_user']);
        session_destroy();
        echo json_encode(['success' => true, 'message' => 'Berhasil keluar dari akun.']);
        break;

    case 'get_session':
        $user = isset($_SESSION['sadar_user']) ? $_SESSION['sadar_user'] : null;
        echo json_encode(['success' => true, 'user' => $user]);
        break;

    // ==========================================
    // 4. SIMPAN PESAN CHAT KE MYSQL (save_chat)
    // ==========================================
    case 'save_chat':
        $userId  = (isset($data['userId']) && $data['userId'] !== 'guest' && is_numeric($data['userId'])) ? (int)$data['userId'] : null;
        $sender  = (isset($data['sender']) && in_array($data['sender'], ['user', 'bot'])) ? $data['sender'] : 'user';
        $message = isset($data['message']) ? $data['message'] : '';
        $time    = isset($data['time']) ? $data['time'] : date('H:i');

        if (empty($message)) {
            echo json_encode(['success' => false, 'message' => 'Pesan tidak boleh kosong.']);
            exit;
        }

        $stmt = $conn->prepare("INSERT INTO chat_history (user_id, sender, message, time) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("isss", $userId, $sender, $message, $time);

        if ($stmt->execute()) {
            echo json_encode([
                'success' => true,
                'id'      => $stmt->insert_id,
                'userId'  => $userId,
                'sender'  => $sender,
                'message' => $message,
                'time'    => $time
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Gagal menyimpan chat ke MySQL: ' . $conn->error]);
        }
        break;

    // ==========================================
    // 5. AMBIL RIWAYAT CHAT DARI MYSQL (get_chat)
    // ==========================================
    case 'get_chat':
        $userId = isset($_GET['user_id']) ? $_GET['user_id'] : (isset($data['userId']) ? $data['userId'] : 'guest');

        if ($userId === 'guest' || empty($userId)) {
            $stmt = $conn->prepare("SELECT id, user_id as userId, sender, message, time, created_at as timestamp FROM chat_history WHERE user_id IS NULL ORDER BY created_at ASC");
        } else {
            $uId = (int)$userId;
            $stmt = $conn->prepare("SELECT id, user_id as userId, sender, message, time, created_at as timestamp FROM chat_history WHERE user_id = ? ORDER BY created_at ASC");
            $stmt->bind_param("i", $uId);
        }

        $stmt->execute();
        $res = $stmt->get_result();
        $chats = [];

        while ($row = $res->fetch_assoc()) {
            $chats[] = $row;
        }

        echo json_encode([
            'success' => true,
            'data'    => $chats
        ]);
        break;

    // ==========================================
    // 6. HAPUS RIWAYAT CHAT DARI MYSQL (clear_chat)
    // ==========================================
    case 'clear_chat':
        $userId = isset($data['userId']) ? $data['userId'] : 'guest';

        if ($userId === 'guest' || empty($userId)) {
            $stmt = $conn->prepare("DELETE FROM chat_history WHERE user_id IS NULL");
        } else {
            $uId = (int)$userId;
            $stmt = $conn->prepare("DELETE FROM chat_history WHERE user_id = ?");
            $stmt->bind_param("i", $uId);
        }

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Riwayat chat berhasil dihapus dari MySQL.']);
        } else {
            echo json_encode(['success' => false, 'message' => 'Gagal menghapus riwayat chat: ' . $conn->error]);
        }
        break;

    default:
        echo json_encode([
            'success' => false,
            'message' => 'Aksi API tidak valid. Parameter action diperlukan (register, login, logout, get_session, save_chat, get_chat, clear_chat).'
        ]);
        break;
}

