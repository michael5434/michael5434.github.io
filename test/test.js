const container = document.querySelector(".container");
const signupbtn = document.querySelector(".signup");
const signinbtn = document.querySelector(".signin");

signupbtn.addEventListener('click', () =>{
    container.classList.add("active")
})

signinbtn.addEventListener('click', () =>{
    container.classList.remove("active");
})