
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