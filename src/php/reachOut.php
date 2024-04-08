<?php
  if (isset($_POST["submit"])) {
  $name = $_POST['name'] ;
  $email = $_POST['email'] ;
  $country = $_POST['country'] ;
  $message = $_POST['message'] ;

         $to = "anniebaig.ab@gmail.com";
         $subject = "Query" ;
         $body = "From: $name\n <br><br> E-Mail: $email\n <br><br> Message:\n $message";
         $header = "From: $email \r\n";
     //    $header .= "Cc:afgh@somedomain.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         $retval = mail ($to,$subject,$body,$header);
         if($retval == true)  {
             $result =  " Thank You! Your request has been submitted successfully. " ;
         }else {
               $result = " Sorry there was an error sending your message. Please try again later " ;
         }
       }
 
      ?>  