let login = document.querySelector(".Login");
let SignUp = document.querySelector(".SignUp");
let login_popup = document.querySelector(".login-info");
let cross = document.querySelector("#cross");
let signup_info = document.querySelector(".signup-info");
let cross_signup = document.querySelector("#cross-signup");

login.addEventListener('click',()=>{
  console.log(window.innerWidth)
  if (window.innerWidth >= 600){
  login_popup.style.display = 'block';
  signup_info.style.display = "none"
}
else{
  login_popup.style.display = 'block';
  contact.style.transform  = `scale(0)`;
}
})

cross.addEventListener('click',()=>{
  login_popup.style.display = 'none';
  signup_info.style.display = "none"
})

SignUp.addEventListener("click",()=>{
  if (window.innerWidth >= 600){
  signup_info.style.display = "block";
  login_popup.style.display = 'none';
}
else{
  signup_info.style.display = "block";
  contact.style.transform  = `scale(0)`
}
})

cross_signup.addEventListener("click",()=>{
  signup_info.style.display = "none";
  login_popup.style.display = 'none';
})





//MENU BAR
let menu_bar = document.querySelector("#menu-bar");
let contact = document.querySelector(".contact");
let menu_value = 0;
menu_bar.addEventListener('click',()=>{
  if (menu_value % 2 === 0){
    contact.style.transform  = `scale(1)`;
    menu_value++;
  }
  else{
    contact.style.transform  = `scale(0)`;
    menu_value++;
  }
})

