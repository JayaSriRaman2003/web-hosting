function login() {
    const name = document.getElementById("l-user-name").value;
    const pass = document.getElementById("l-user-password").value;

    if (!name || !pass) {
        alert("Please enter all the fields");
        return;
    }

   
    const storedName = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (name === storedName && pass === storedPass) {
        alert("Login successful!");
        window.location.href = "homePage.html";
    } else {
        alert("Invalid username or password");
    }
}
