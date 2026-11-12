<?php
/**
 * SADAR - Sarana Edukasi dan Deteksi Anti Narkoba
 * File: koneksi.php
 * Konfigurasi koneksi ke Database MySQL XAMPP
 * PjBL Kelas XI RPL
 */

// Header agar respon berupa JSON dan mendukung CORS
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$db_host = 'localhost';
$db_user = 'root';
$db_pass = ''; // Default XAMPP adalah kosong
$db_name = 'sadar_p4gn_db';

$conn = @new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    // Jika koneksi gagal (misal database belum diimpor)
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'status'  => 'db_error',
        'message' => 'Gagal terhubung ke database MySQL di XAMPP. Pastikan MySQL sudah dijalankan (Start) dan database "sadar_p4gn_db" sudah dibuat/diimpor di phpMyAdmin.',
        'error'   => $conn->connect_error
    ]);
    exit;
}

$conn->set_charset('utf8mb4');

