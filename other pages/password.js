
let signup = document.querySelector(".signup");

signup.addEventListener("click", checkpassword);


const checkpassword = (event) => {

    event.preventDefault();
    let password = document.querySelector("#password").value;
    let repassword = document.querySelector("#repassword").value;

    if (password === "" || repassword === "") {
        console.log("Please enter your password in both fields.");
    } else if (password !== repassword) {
        console.log("Passwords do not match. Please try again.");
    } else {
        window.location.href = "Homepage.html";
    }
}

