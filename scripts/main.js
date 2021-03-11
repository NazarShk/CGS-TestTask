let openMenu = document.querySelector(".openMenu");
let closeMenu = document.querySelector(".closeMenu");
let menu = document.querySelector(".mobile-nav");
let login = document.querySelector(".buttons__login");
let modalWindow = document.querySelector(".modal");
let closeMenuLogin = document.querySelector(".closeMenuLogin");
let email = document.querySelector("#email");
let discover = document.querySelector(".discover__anchor"); 
let anchor = document.querySelector(".trial__anchor");
let header = document.querySelector(".header");
let timerOpen;
let timerClose;

function openMobMenu(){
    menu.style.display = "block";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    clearInterval(timerOpen);

    timerClose = setInterval(()=>{
      if(header.clientWidth >= 754){
        closeMenu.style.display = "none";
        menu.style.display = "none";
      } else{
        closeMenu.style.display = "block";
      }
    }, 1000);
}

function closeMobMenu(){
    menu.style.display = "none";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    clearInterval(timerClose);

    timerOpen = setInterval(()=>{
      if(header.clientWidth >= 754){
        openMenu.style.display = "none";
      } else{
        openMenu.style.display = "block";
      }
    }, 1000);
}

openMenu.addEventListener("click", openMobMenu);
closeMenu.addEventListener("click", closeMobMenu);

login.addEventListener("click", () => modalWindow.style.display = "flex");
closeMenuLogin.addEventListener("click", () => modalWindow.style.display = "none");


anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href');
    email.focus();
    console.log(blockID);
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
})

discover.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = discover.getAttribute('href');
    console.log(blockID);
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
})