const multer  = require('multer');

const storage = multer.diskStorage({
    destination: "public/serviceimages",
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '_' + file.originalname;
      cb(null, uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage });

module.exports = upload;