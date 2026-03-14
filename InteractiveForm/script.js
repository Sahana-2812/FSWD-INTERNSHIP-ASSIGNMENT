let form = document.getElementById("myForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(name === "" || email === "" || password === ""){

message.textContent = "All fields are required!";
message.className = "error";

}

else if(password.length < 6){

message.textContent = "Password must be at least 6 characters!";
message.className = "error";

}

else{

message.textContent = "Form submitted successfully!";
message.className = "success";

}

});