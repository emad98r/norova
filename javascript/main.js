
// to translate the page to any language 

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}


// show and hide nav bar 
let listBtn=document.querySelector(".listBtn"),
cancelBtn=document.querySelector(".cancelBtn"),
nav=document.querySelector("nav ul");

listBtn.addEventListener('click',()=>{
  listBtn.style.display="none"
  cancelBtn.style.display="block"
  nav.style.display="flex"
})
cancelBtn.addEventListener('click',()=>{
  listBtn.style.display="block"
  cancelBtn.style.display="none"
  nav.style.display="none"
})



// scroll to every section -------

let homeBtn=document.querySelector("#homeBtn");
let aboutUsBtn=document.querySelector("#aboutUsBtn");
let servicesBtn=document.querySelector("#servicesBtn");
let iAndEBtn=document.querySelector("#iAndEBtn");
let contactBtn=document.querySelector("#contactBtn");
let bigLogo=document.querySelector("#bigLogo")

bigLogo.addEventListener("click",()=>{
  location.href="#section-1"
})
homeBtn.addEventListener("click",()=>{
  location.href="#section-1"
})
aboutUsBtn.addEventListener("click",()=>{
  location.href="#section-2"
})
servicesBtn.addEventListener("click",()=>{
  location.href="#section-3"
})
iAndEBtn.addEventListener("click",()=>{
  location.href="#section-4"
})
contactBtn.addEventListener("click",()=>{
  location.href="#section-5"
})