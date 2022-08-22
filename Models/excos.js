const mongoose = require("mongoose");

const excosSchema = new mongoose.Schema({
    post: String,
    image: String,
    name: String,

}, {timestamps: true});


const Exco = new mongoose.model("Exco", excosSchema);

module.exports = Exco;

// const user1 = new Exco({
//     position: "PRESIDENT/BIBLE STUDY SEC",
//     image: "/image/Pastor Philp Alabi.jpg",
//     name: "Pastor Alabi Philip" 
// });
// const user2 = new Exco ({
//     position: "VICE-PRESIDENT/PRAYER CORD",
//     image: "/image/Pben.jpg",
//     name: "Pastor Benjamin"
// });
// const user3 = new Exco ({
//     position: "GENERAL SECRETARY",
//     image: "/image/Sis Odid Blessing-Gen sec.jpg",
//     name: "Sis Odidi Blessing"
// });
// const user4 = new Exco ({
//     position: "ASSITANT GENERAL SECRETARY/FIN SECRETARY",
//     image: "/image/Sis Bukola-Fin sec.jpg",
//     name: "Sis Adebukola"
// });
// const user5 = new Exco ({
//     position: "ASSITANT BIBLE STUDY",
//     image: "/image/Sis Catherine-Asst BIble secretary.jpg",
//     name: "Sis Adebayo Catherine"
// });
// const user6 = new Exco ({
//     position: "SANTUARY KEEPING HEAD",
//     image: "/image/Sis Temiloluwa-Sanctuary head.jpg",
//     name: "Sis Akinsola Temiloluwa"
// });
// const user7 = new Exco ({
//     position: "ASSITANT SANTUARY KEEPING HEAD/DRAMA CORDINATOR",
//     image: "",
//     name: "Sis Olubunmi Dorcas"
// });
// const user8 = new Exco ({
//     position: "CHOIR DIRECTOR",
//     image: "/image/Sis Deborah-choir cord.jpg",
//     name: "Sis Adeyemo Deborah"
// });
// const user9 = new Exco ({
//     position: "ASST CHOIR DIRECTOR",
//     image: ""/image/sisfaith.jpg"",
//     name: "Sis Faith"
// });
// const user10 = new Exco ({
//     position: "PUBLICITY UNIT HEAD",
//     image: "",
//     name: "Bro Olususi Oluwaferanmi"
// })








