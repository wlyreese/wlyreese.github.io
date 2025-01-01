const imageDisplay = document.getElementById("imageDisplay");
const inputButton = document.getElementById("inputButton");
const inputContainer = document.getElementById("inputContainer");


function updateImage(){
    if(window.innerWidth >= 1200){
        imageDisplay.src = "images/hero-desktop.jpg";
    }else{
        imageDisplay.src = "images/hero-mobile.jpg";
    }
}

inputButton.addEventListener("click", (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9_\-+$.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,}$/g

    const errorIcon = document.getElementById("errorIcon");
    const errorMessage = document.getElementById("inputActiveStateDisplay");

    const userEmailInput = document.getElementById("userEmailInput");

    if(emailRegex.test(userEmailInput.value) == true){
        errorMessage.style.cssText = "visibility: visible; color: green;";
        errorMessage.textContent = "Thanks for submitting your email! We will contact you when the store opens!"
        errorIcon.style.display = "none";
                userEmailInput.style.border = "1px solid var(--Desaturated-Red)"
        document.getElementById("userEmailInput").value = '';
    }else{
        errorMessage.style.cssText = "visibility: visible; color: red;";
        userEmailInput.style.border = "2px solid red"
        errorMessage.textContent = "Please enter a valid email.";
        errorIcon.style.display = "block";
    }
});

updateImage();

window.addEventListener("resize", updateImage);