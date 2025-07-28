<?php
if (
    empty($_POST['name']) ||
    empty($_POST['subject']) ||
    empty($_POST['message']) ||
    !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    http_response_code(500);
    exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Your Email
$to = "prasad.education.institute@gmail.com";

// Subject
$subject = "$m_subject: $name";

// Email body
$body = "You have received a new message from your website contact form.\n\n";
$body .= "Here are the details:\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Subject: $m_subject\n";
$body .= "Message: $message\n";

// Headers
$headers = "From: mastersenterprise2025@gmail.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (!mail($to, $subject, $body, $headers)) {
    http_response_code(500);
}
?>
