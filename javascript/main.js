
// to translate the page to any language 
function googleTranslateElementInit() {

  new google.translate.TranslateElement({
  pageLanguage: 'en',
  autoDisplay: 'true',
  includedLanguages:'ar,en', 
  layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
  }, 'google_translate_element');
  }

// nav section ----------
let logo =document.querySelector("#logo"),
header=document.querySelector('header'),
menuBtn =document.querySelector("#menuBtn"),
cancelBtn =document.querySelector("#cancelBtn"),
nav =document.querySelector("nav");


menuBtn.addEventListener("click",()=>{
  menuBtn.style.display='none'
  cancelBtn.style.display='block'
  nav.style.display='flex'
})
cancelBtn.addEventListener("click",()=>{
  menuBtn.style.display='block'
  cancelBtn.style.display='none'
  nav.style.display='none'
})

window.addEventListener("scroll",()=>{
  if(window.scrollY >= 633){
header.style.cssText=`background-color:var(--light-color);border-bottom:3px solid var(--blue-color)`
logo.style.opacity=1
}else{
  header.style.cssText=`background-color:transparent;border:none;`
  logo.style.opacity=0
  }
})


// loading page 

let loading_page=document.querySelector(".loading-page")
window.addEventListener("load",()=>{
  loading_page.style.display='none'
})


  // nav and sections --------------
  let homeBtn=document.querySelector('#home'),
  aboutUsBtn=document.querySelector('#aboutUs'),
  ourServicesBtn=document.querySelector('#ourServices'),
  import_exportBtn=document.querySelector('#import_export'),
  image_gallery=document.querySelector('#image_gallery'),
  orderNowBtn=document.querySelector('#orderNow');


homeBtn.addEventListener("click",()=>{
  location.href='#section_1'
})
aboutUsBtn.addEventListener("click",()=>{
  location.href='#section_2'
})
ourServicesBtn.addEventListener("click",()=>{
  location.href='#section_3'
})
image_gallery.addEventListener("click",()=>{
  location.href='#section_4'
})
import_exportBtn.addEventListener("click",()=>{
  location.href='#section_5'
})
orderNowBtn.addEventListener("click",()=>{
  location.href='#section_6'
})



// Animation---------
let smallS = window.matchMedia('(max-width: 767px)');


// section -2 
let shipImg=document.querySelector('.section-2 img'),
section_2=document.querySelector('.section-2');
window.addEventListener("scroll",()=>{
  if(window.scrollY>=section_2.offsetTop-300){
    shipImg.style.cssText=`opacity:1`
  }
})



// section - 3
let services=document.querySelectorAll(".service"),
section_3=document.querySelector(".section-3");

window.addEventListener("scroll",()=>{
  if(window.scrollY>=section_3.offsetTop-300){
  services.forEach((e)=>{
    e.style.cssText=`transform: translateX(0);`
  })
}
})

// section - 4 
let products=document.querySelectorAll('.product'),
section_5=document.querySelector('.section-5');
window.addEventListener("scroll",()=>{
  if(window.scrollY>=section_5.offsetTop-300){
    products.forEach((e)=>{
      e.style.cssText=`animation: flipInX 1s both;`
    })
  }
})
// section - 6 
let flight_track=document.querySelectorAll('.section-6 img:first-of-type'),
section_6=document.querySelector('.section-6');
window.addEventListener("scroll",()=>{
  if(window.scrollY>=section_6.offsetTop-300){
    flight_track.forEach((e)=>{
      e.style.cssText=`width:35em;`
      if(smallS.matches){
      e.style.cssText=`width:100%`
      }
    })
  }
})


