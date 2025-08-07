<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['name'] ?? '';
$number  = $_POST['number'] ?? '';
$email   = $_POST['email'] ?? '';
$profile = $_POST['profile'] ?? '';
$age     = $_POST['age'] ?? '';


    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kausar.mastersenterprise@gmail.com'; // Your Gmail
        $mail->Password   = 'ctjk tyhx ecly jjvs';                // App password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Sender & Receiver
        $mail->setFrom('kausar.mastersenterprise@gmail.com', 'Career Form');
        $mail->addAddress('kausar.mastersenterprise@gmail.com');

        // Resume Attachment
        if (isset($_FILES['resume']) && $_FILES['resume']['error'] == 0) {
            $mail->addAttachment($_FILES['resume']['tmp_name'], $_FILES['resume']['name']);
        }

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = 'New Career Form Submission';
        $mail->Body    = "
            <strong>Name:</strong> $name<br>
            <strong>Number:</strong> $number<br>
            <strong>Email:</strong> $email<br>
            <strong>Profile:</strong> $profile<br>
            <strong>Age:</strong> $age<br>
            <strong>Resume:</strong> Attached (if any)
        ";

        $mail->send();
        echo "<script>
    alert('Application submitted successfully!');
    window.history.back();
</script>";
    } catch (Exception $e) {
        echo "Application could not be sent. Error: {$mail->ErrorInfo}";
    }
}
?>
