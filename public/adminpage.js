const excoChange = document.querySelector(".excos_change");
const addService = document.querySelector(".add_service_change");
const addQuotes = document.querySelector(".quotes_change");
const addSermon = document.querySelector(".message_change");






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
  