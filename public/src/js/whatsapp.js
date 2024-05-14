function sendToWhatsapp(){
    event.preventDefault();
	let number = "+923394018116";

	let name = document.getElementById('name').value;
    let nameErr = document.getElementById('name_err');
	let email = document.getElementById('email').value;
    let emailErr = document.getElementById('email_err');
    let country = document.getElementById('country').value;
    let countryErr = document.getElementById('country_err');
	let message = document.getElementById('message').value;
    let messageErr = document.getElementById('msg_err');

    if (!name) {
        nameErr.style.display= "block";
      } else {
        nameErr.style.display= "none";
      }
      if (!email) {
        emailErr.style.display="block";
      } else {
        emailErr.style.display="none";
      }
      if (!country) {
        countryErr.style.display="block";
      } else {
        countryErr.style.display="none";
      }
      if (!message) {
        messageErr.style.display="block";
      } else {
        messageErr.style.display="none";
      }
	var url = "https://wa.me/" + number + "?text="
	+ "Name : " +name+ "%0a"
	+ "Email : " +email+ "%0a"
    + "Country : " +country+ "%0a"
	+ "Message : " +message+ "%0a%0a";
    if (name && email && country && message) {
	window.open(url, '_blank').focus();
    }else {
        console.log("heelooo");
    }
}