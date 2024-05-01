<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sendername = $_POST['sendername'];
    $sendercompany = $_POST['sendercompany'];
    $senderwork = $_POST['senderwork'];
    $sendermail = $_POST['sendermail'];
    $senderno = $_POST['senderno'];

    // Set up the email
    $to = 'theviveksagar@gmail.com'; // Your email address
    $subject = 'Contact Form Submission';
    $message = "Name: $sendername\n";
    $message .= "Company: $sendercompany\n";
    $message .= "Message: $senderwork\n";
    $message .= "Email: $sendermail\n";
    $message .= "Phone Number: $senderno\n";

    // Send the email
    if (mail($to, $subject, $message)) {
        echo 'Thank you for your message. We will get back to you soon.';
    } else {
        echo 'Oops! Something went wrong. Please try again later.';
    }
} else {
    // Handle the case where the form was not submitted
    echo 'Form submission failed!';
}

?>
