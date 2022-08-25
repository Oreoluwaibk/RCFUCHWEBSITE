const multer  = require('multer');

const storage = multer.diskStorage({
    destination: "public/excosimages",
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '_' + file.originalname;
      cb(null, uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage }).single("image");

module.exports = upload;