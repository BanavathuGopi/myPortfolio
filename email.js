(function(){
    emailjs.init("YOUR_USER_ID");
})();
function sendEmail(event) {
    event.preventDefault(); 
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
        .then(function() {
            document.getElementById('success-message').style.display = 'block';
            event.target.reset(); 
        }, function(error) {
            alert('Failed to send the message, please try again.');
        });
}
document.getElementById('contact-form').addEventListener('submit', sendEmail);
