// Validity
// ValiditionMessage()
// checkValidity()
// reportValidity()
// setCustomValidity()
// let check = document.getElementById("chk");
// function validateForm() {
//     if (check.value ==" ") {
//         alert("kindly fill in your details");
//     }
// }

// else{
//     alert ("submitted")
// }
// function validateForm(){
//     var check = document.forms['chk']['psw'].value;
//     if (check ==" ") {
//         alert("kindly fill in your details");
//     }
    
// }
// function checkForm() {
//     let check = document.forms["userForm"]["user"].value;
//     if ( check == "") {
//         alert("kindly fill in your details");
//     }
//     return false;

    
// }
// const form =document.querySelector("form");
// const email = document.getElementById("mail");
// const emailError= document.querySelector("#mail + span.error")
// email.addEventListener("input",
// (event => {
//     if(email.validity.valid){
//         emailError.textContent= " ";
//     }
//     else{
        
//         emailError.textContent ="Enter your email address"
    
//     }
// }));
// form.addEventListener( "submit", (event =>
//     {
//         if(!email.validity.valid){
//             showError();
//             event.preventDefault();
//         }

//     })


// )
// function showError(){
//     if(email.validity.valueMissing){
//         emailError.textContent ="Enter your email address"
//     };
//     elseif(email.validity.tooShort)
//     {
//         emailError.textContent ="Your email is too short";
//     }
// }
fetch('https://jsonplaceholder.typicode.com/comments/100')
  .then(response => response.json())
  .then(json => console.log(json))

var image = `https://jsonplaceholder.typicode.com/comments/100`
fetch (image)
 .then(response =>{
    return response.json();
 }
)
.then(json => console.log("json"))
 
const myLocation = document.getElementById("location")
function getLocation(){
    try{
        navigator.geolocation.getCurrentPosition(displayMyLocation())
    }
    catch(error){
        myLocation.innerHTML = alert("Location not found")
    }
}
function displayMyLocation() {
    // specify certain codes
}

