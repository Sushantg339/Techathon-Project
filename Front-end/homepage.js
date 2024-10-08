document.addEventListener("DOMContentLoaded", async function (e) {
<<<<<<< HEAD
  e.preventDefault()
  try {
      // Fetch user details from backend on page load
      const response = await fetch("http://localhost:8088/getUser", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });

      if (response.ok) {
          const data = await response.json();
          // Populate user details in the HTML
          document.getElementById("first-name-display").innerText = data.first_name;
          document.getElementById("last-name-display").innerText = data.last_name;
          document.getElementById("email-display").innerText = data.email;
          document.getElementById("phone-display").innerText = data.mobileNumber;

          // Also populate the edit form with the fetched values
          document.getElementById("first-name").value = data.first_name;
          document.getElementById("last-name").value = data.last_name;
          document.getElementById("email").value = data.email;
          document.getElementById("phone").value = data.mobileNumber;
      } else {
          console.error("Failed to fetch user data.");
      }
  } catch (error) {
      console.error("Error fetching user data:", error);
  }
});

document.getElementById("edit-btn").addEventListener("click", function () {
  document.getElementById("edit-section").style.display = "block";
});

document.getElementById("save-changes-btn").addEventListener("click", async function (e) {
  e.preventDefault()
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const mail = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const user = {
        first_name: firstName,
        last_name: lastName,
        email: mail,
        mobileNumber: phone,
        password:12345
    };

  console.log("Users",user)
  
  try {
      // Send updated user details to the backend (PUT request)
      const response = await fetch("http://localhost:8088/updateUser", {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
      });

      console.log(response)

      if (response.ok) {
          // Update the displayed user details after successful save
          document.getElementById("first-name-display").innerText = user.first_name;
          document.getElementById("last-name-display").innerText = user.last_name;0
          document.getElementById("email-display").innerText = user.email;
          document.getElementById("phone-display").innerText = user.mobileNumber;

          // Hide the edit section
          document.getElementById("edit-section").style.display = "none";
          alert("Changes saved successfully");
          window.location.href="Homepage.html"
      } else {
          console.error("Failed to update user details.");
      }
  } catch (error) {
      console.error("Error updating user details:", error);
  }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  window.location.href = "index.html";
  alert("Logged Out Successfully");
});
=======
    e.preventDefault()
    try {
        // Fetch user details from backend on page load
        const response = await fetch("http://localhost:8088/getUser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
  
        if (response.ok) {
            const data = await response.json();
            // Populate user details in the HTML
            document.getElementById("first-name-display").innerText = data.first_name;
            document.getElementById("last-name-display").innerText = data.last_name;
            document.getElementById("email-display").innerText = data.email;
            document.getElementById("phone-display").innerText = data.mobileNumber;
  
            // Also populate the edit form with the fetched values
            document.getElementById("first-name").value = data.first_name;
            document.getElementById("last-name").value = data.last_name;
            document.getElementById("email").value = data.email;
            document.getElementById("phone").value = data.mobileNumber;
        } else {
            console.error("Failed to fetch user data.");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
  });
  
  document.getElementById("edit-btn").addEventListener("click", function () {
    document.getElementById("edit-section").style.display = "block";
  });
  
  document.getElementById("save-changes-btn").addEventListener("click", async function (e) {
    e.preventDefault()
    const updatedUser = {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        mobileNumber: document.getElementById("phone").value,
    };
  
    console.log(updatedUser)
  
    try {
        // Send updated user details to the backend (PUT request)
        const response = await fetch("http://localhost:8088/updateUser", {
            method: "PUT",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(updatedUser),
        });
  
        console.log(response)
  
        if (response.ok) {
            // Update the displayed user details after successful save
            document.getElementById("first-name-display").innerText = updatedUser.first_name;
            document.getElementById("last-name-display").innerText = updatedUser.last_name;
            document.getElementById("email-display").innerText = updatedUser.email;
            document.getElementById("phone-display").innerText = updatedUser.mobileNumber;
  
            // Hide the edit section
            document.getElementById("edit-section").style.display = "none";
        } else {
            console.error("Failed to update user details.");
        }
    } catch (error) {
        console.error("Error updating user details:", error);
    }
  });
  
  document.getElementById("logout-btn").addEventListener("click", () => {
    window.location.href = "index.html";
    alert("Logged Out Successfully");
  });
  
>>>>>>> c4768811df901f324f51c007b3eff21b42e7b0e6
