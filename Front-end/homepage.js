document.getElementById("edit-btn").addEventListener("click", function () {
    document.getElementById("edit-section").style.display = "block";
  });
  
  document.getElementById("save-changes-btn").addEventListener("click", function () {
    
    document.getElementById("first-name-display").innerText = document.getElementById("first-name").value;
    document.getElementById("last-name-display").innerText = document.getElementById("last-name").value;
    document.getElementById("email-display").innerText = document.getElementById("email").value;
    document.getElementById("phone-display").innerText = document.getElementById("phone").value;
  
    
    document.getElementById("edit-section").style.display = "none";
  });

  document.getElementById("logout-btn").addEventListener("click",()=>{
    window.location.href = "index.html";
    alert("Logged Out Successfully");
  })