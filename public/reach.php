<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $country = htmlspecialchars($_POST['country']);
  $message = htmlspecialchars($_POST['message']);
  $to = "anniebaig.ab@gmail.com";
  $subject = "Client query";
  $headers = "From:". $email . "\r\n" .
  "CC: anniebaig.ab@gmail.com";
  mail($to,$subject,$name,$headers);
}
?>
