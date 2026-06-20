// JavaScript code for form validation

document.getElementById("myForm").addEventListener("submit", function(event) {

   event.preventDefault();

   let inputValue = document.getElementById("inputField").value;

   let regex = /^[a-zA-Z0-9]+$/;

   if (regex.test(inputValue)) {
      document.getElementById("message").textContent =
         "Valid input. Form submitted successfully!";
      document.getElementById("message").style.color = "green";
   } else {
      document.getElementById("message").textContent =
         "Error: Input must be alphanumeric only.";
      document.getElementById("message").style.color = "red";
   }

});