var form = document.getElementById('form');
var token;
var sendToGoogleButton = document.getElementById("button-send");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("token").classList.remove('d-none');
    token = grecaptcha.getResponse();
    document.getElementById("token-place").innerHTML = token;
    sendToGoogleButton.classList.remove('d-none');
});
sendToGoogleButton.addEventListener('click', function (event) {
    event.preventDefault();
    fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'post',
        body: 'secret=6Lek-2sUAAAAABH9-lM5B5OwOAnK29Xc7tOJd3-H&response=' + token,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        document.getElementById("google").classList.remove('d-none');
        document.getElementById("response").innerHTML = data;
    });
})