const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function carryon() {
    windlow.location.href = "userLogin.php";
}

function error() {
    alert("There was an error with the database. Please try again");
    windlow.location.href = "userLogin.php";
}

