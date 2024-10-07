document.getElementById("logout-btn").addEventListener("click", function() {
    // Logic for logging out (e.g., redirect to login page)
    alert("Logged out!");
    // Optionally, you can redirect to another page like this:
    // window.location.href = "login.html";
});

document.getElementById("save-changes-btn").addEventListener("click", function() {
    // Logic for saving changes (e.g., form validation and data submission)
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (firstName && lastName && phone && email) {
        alert("Changes saved successfully!");
    } else {
        alert("Please fill in all fields.");
    }
});