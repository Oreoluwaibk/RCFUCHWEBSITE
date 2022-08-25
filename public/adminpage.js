const excoChange = document.querySelector(".excos_change");
const addService = document.querySelector(".add_service_change");
const addQuotes = document.querySelector(".quotes_change");
const addSermon = document.querySelector(".message_change");
const randomNum = Math.floor((Math.random() * 10) + 1);
const randomStr = parseFloat(randomNum);
const urls = 'url("/image/head' + randomStr + '.jpg")';
const adminQuotes = document.querySelector(".admin_quotes");




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



  excoChange.addEventListener("click", () => {
    document.querySelector(".admin_excos_change").classList.toggle("not__active")
})
  