//You are going in the right direction...
document.getElementById("submitbutton")?.addEventListener("click", function() {
    console.log('Login in...')
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    sendCredentials(email,password)
});
