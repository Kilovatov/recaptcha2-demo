const form = document.getElementById('form');
let token;
const sendToGoogleButton = document.getElementById("button-send");
const tokenJumbotron = document.getElementById("token");
const tokenContainer = document.getElementById("token-place");
const googleRespJumbotron = document.getElementById("google");
const googleRespContainer = document.getElementById("response");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    tokenJumbotron.classList.remove('d-none');
    token = grecaptcha.getResponse();
    tokenContainer.innerHTML = token;
    sendToGoogleButton.classList.remove('d-none');
});



sendToGoogleButton.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'post',
        body: 'secret=6Lek-2sUAAAAABH9-lM5B5OwOAnK29Xc7tOJd3-H&response=' + token,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((response) => response.json()).then(function(data) {
        googleRespJumbotron.classList.remove('d-none');
        googleRespContainer.innerHTML = JSON.stringify(data);
    });
});