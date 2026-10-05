<?php
require_once 'config.php';
require_once 'auth_helper.php';

header('Content-Type: application/json');

// Ensure the request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method Not Allowed. Use POST."]);
    exit();
}

// Check authorization
checkAuthOrExit();

// Validate file upload
if (!isset($_FILES['image']) && !isset($_FILES['video']) && !isset($_FILES['file'])) {
    http_response_code(400);
    echo json_encode(["error" => "No file uploaded."]);
    exit();
}

$fileKey = isset($_FILES['video']) ? 'video' : (isset($_FILES['image']) ? 'image' : 'file');
if ($_FILES[$fileKey]['error'] !== UPLOAD_ERR_OK) {
    http_response_code(400);
    echo json_encode(["error" => "Upload error occurred: " . $_FILES[$fileKey]['error']]);
    exit();
}

$file = $_FILES[$fileKey];
$section = isset($_POST['section']) ? trim($_POST['section']) : 'general';

// Sanitize section name to prevent directory traversal
$section = preg_replace('/[^a-zA-Z0-9_\-]/', '', $section);
if (empty($section)) {
    $section = 'general';
}

// Validate file type
$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'mp4', 'webm', 'ogg', 'mov'];
$fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

if (!in_array($fileExtension, $allowedExtensions)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid file type. Allowed: " . implode(', ', $allowedExtensions)]);
    exit();
}

// Define target directory relative to this script (api/ is sibling to public/ and dist/)
$isVid = in_array($fileExtension, ['mp4', 'webm', 'ogg', 'mov']);
$targetSubDir = $isVid ? 'videos' : 'images/' . $section;

// In cPanel production, assets are served from dist/assets/ or build/assets/
// In local dev, they are in public/assets/
// We save to ALL three locations to guarantee the image resolves regardless of environment/mapping!
$publicDir = '../public/assets/' . $targetSubDir . '/';
$distDir = '../dist/assets/' . $targetSubDir . '/';
$buildDir = '../build/assets/' . $targetSubDir . '/';

// Create directories if they do not exist
if (!file_exists($publicDir)) {
    @mkdir($publicDir, 0755, true);
}
if (!file_exists($distDir)) {
    @mkdir($distDir, 0755, true);
}
if (!file_exists($buildDir)) {
    @mkdir($buildDir, 0755, true);
}

// Generate a unique filename to prevent overwriting
$prefix = $isVid ? 'vid_' : 'img_';
$uniqueFilename = uniqid($prefix, true) . '.' . $fileExtension;

$targetFilePath = $publicDir . $uniqueFilename;
$distFilePath = $distDir . $uniqueFilename;
$buildFilePath = $buildDir . $uniqueFilename;

// Move file to public directory first, then copy to dist and build
if (move_uploaded_file($file['tmp_name'], $targetFilePath)) {
    @copy($targetFilePath, $distFilePath);
    @copy($targetFilePath, $buildFilePath);

    $dbPath = 'assets/' . $targetSubDir . '/' . $uniqueFilename;
    echo json_encode([
        "success" => true,
        "message" => "File uploaded successfully!",
        "path" => $dbPath
    ]);
} else {
    // If public directory move fails, try moving directly to dist or build as fallback
    $fallbackSuccess = false;
    if (move_uploaded_file($file['tmp_name'], $distFilePath)) {
        @copy($distFilePath, $targetFilePath);
        @copy($distFilePath, $buildFilePath);
        $fallbackSuccess = true;
    } elseif (move_uploaded_file($file['tmp_name'], $buildFilePath)) {
        @copy($buildFilePath, $targetFilePath);
        @copy($buildFilePath, $distFilePath);
        $fallbackSuccess = true;
    }

    if ($fallbackSuccess) {
        $dbPath = 'assets/' . $targetSubDir . '/' . $uniqueFilename;
        echo json_encode([
            "success" => true,
            "message" => "File uploaded successfully!",
            "path" => $dbPath
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to save the uploaded file on the server."]);
    }
}
?>
