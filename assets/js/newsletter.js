function newsletterSignUp(contactForm) {
    //Uses template from my EmailJS account and data input by users
    emailjs.send("gmail", "our_oceans_our_plastic", {
        "from_name": contactForm.firstname.value,
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            //Refreshes form after submission
            location.reload();
            //Add alert with user's name when form is successfully sent
            alert("Great to have you with us " + contactForm.firstname.value + "! Look out for our newsletter in your inbox soon.");
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

/* Source of guidance used to create this code:
Code Institute Mini Project: https://github.com/mkthewlis/rosie-resume-with-js/blob/master/assets/js/sendEmail.js 
EmailJS: https://www.emailjs.com/docs/tutorial/creating-contact-form/
EmailJS: https://www.emailjs.com/docs/sdk/send/
*/