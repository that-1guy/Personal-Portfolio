//Script function for contact container
const form = document.getElementById('YOUR_FORM_ID');

form.addEventListener('submit', function(e) {

    const hCaptcha = form.querySelector('textarea[name=h-captcha-response]').value;

    if (!hCaptcha) {
        e.preventDefault();
        alert("Please fill out captcha field")
        return
    }
});

//To top function

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};