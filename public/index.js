
const login = document.querySelector(".login");
const submit = document.querySelector(".submit");
const searchIcon = document.querySelector(".search__icon");
const search = document.querySelector(".search");
const bars = document.querySelector(".bars");
const cancel = document.querySelector(".cancel");
const nav = document.querySelector(".nav");
const dayte = document.getElementById("date");
const headE = document.querySelector(".headed");
const randomNumber = Math.floor((Math.random() * 10) + 1);
const randomString = parseFloat(randomNumber);
const url = 'url("/image/head' + randomString + '.jpg")';
const adminReset = document.querySelector(".admin_reset");
const adminLogin = document.querySelector(".admin_login");
const excoChange = document.querySelector(".excos_change");





const today = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
}
const currentYear = today.getFullYear();
const currentDay = today.toLocaleDateString("en-uk", options);

const official = `© Copyright ${currentYear} The Redeemed Christian Fellowship`
document.querySelector(".poi").innerHTML = official;


// excoChange.addEventListener("click", () => {
//     document.querySelector(".admin_excos_change").classList.toggle("not__active")
// })

searchIcon.addEventListener("click", ()=>{
  search.classList.toggle("search__active");
});

headE.style.backgroundImage = url;
bars.addEventListener("click", ()=>{

    nav.classList.add("activate");
    cancel.classList.add("activate");
    cancel.classList.remove("not__activate");
    bars.classList.remove("activate");
    document.querySelector(".container").style.opacity = "0.6";
    document.querySelector(".salvation__call").style.opacity = "0.6";
    document.querySelector("footer").style.opacity = "0.6";
    document.querySelector(".admin__login").style.opacity = "0.6";
    
});
cancel.addEventListener("click", ()=>{
  nav.classList.remove("activate");
  bars.classList.add("activate");
  cancel.classList.remove("activate");
  search.style.display = "none";
    document.querySelector(".container").style.opacity = "1";
    document.querySelector(".salvation__call").style.opacity = "1";
    document.querySelector("footer").style.opacity = "1";
});




let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

async function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("meet__excos");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  const x = window.matchMedia("(max-width: 700px)");
  if (x.matches){
    slides[slideIndex - 1].style.display = "grid";
    slides[slideIndex].style.display = "grid";
    slides[slideIndex + 1].style.display = "grid";

    dots[slideIndex-1].className += " active";
    dots[slideIndex].className += " active";
  }else{
    slides[slideIndex - 1].style.display = "grid";
    slides[slideIndex].style.display = "grid";
    slides[slideIndex + 1].style.display = "grid";

    dots[slideIndex-1].className += " active";
    dots[slideIndex].className += " active";
  }
}
