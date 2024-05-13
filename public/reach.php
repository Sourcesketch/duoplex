<?php 
  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];
  $message = $_REQUEST['message'];
  $to = "anniebaig.ab@gmail.com";
  $subject = "My subject";
  $txt = "Hello world!";
  $headers = "From: webmaster@example.com" . "\r\n" .
  "CC: anniebaig.ab@gmail.com";
  
  mail($to,$subject,$txt,$headers);
  

?>