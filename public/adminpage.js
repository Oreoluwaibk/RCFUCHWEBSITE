const excoChange = document.querySelector(".excos_change");
const addService = document.querySelector(".add_service_change");
const addQuotes = document.querySelector(".quotes_change");
const addSermon = document.querySelector(".message_change");
const randomNum = Math.floor((Math.random() * 10) + 1);
const randomStr = parseFloat(randomNum);
const urls = 'url("/image/head' + randomStr + '.jpg")';
const adminQuotes = document.querySelector(".admin_quotes");
const addUpload = document.querySelector(".upload_change");
const uploadImage = document.querySelectorAll(".upload_cards .uploads");
const date = document.getElementById("date");
const todays = new Date();
const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
}

const currentDay = todays.toLocaleDateString("en-uk", options);

date.innerHTML = currentDay;

const nextImageDelay = 5000;
let currentCount = 0;


uploadImage[currentCount].style.opacity = 1;

setInterval(nextImage, nextImageDelay);


function nextImage(){
  // uploadImage[currentCount].style.zIndex = -2;
  const tempCount = currentCount;
  setTimeout(() => {
    uploadImage[tempCount].style.opacity = 0;
  }, 1000);
  currentCount = (currentCount + 1) % uploadImage.length;
  uploadImage[currentCount].style.opacity = 1;
  // uploadImage[currentCount].style.zIndex = -1;
  

}





adminQuotes.style.backgroundImage = urls;
addService.addEventListener("click", () =>{
    document.querySelector(".add_service").classList.toggle("not__active")
  });

  addQuotes.addEventListener("click", () =>{
    document.querySelector(".add_quotes").classList.toggle("not__active")
  });

  addSermon.addEventListener("click", () =>{
    document.querySelector(".add_sermon").classList.toggle("not__active")
  });

  addUpload.addEventListener("click", () =>{
    document.querySelector(".add_upload").classList.toggle("not__active")
  });

  excoChange.addEventListener("click", () => {
    document.querySelector(".admin_excos_change").classList.toggle("not__active")
})
  