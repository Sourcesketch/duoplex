
<?php 
  $name = $_POST["name"]; 
  $email = $_POST["email"]; 
  $country= $_POST["country"];
  $message = $_POST["message"];
  $recieptant= "anniebaig.ab@gmail.com";
  $header .= "From:" .$name. "<" .$email. ">\r\n";
  // send email
  mail($recieptant,"qoute from client",$message,$header);
?>
