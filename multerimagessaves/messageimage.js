const multer  = require('multer');

const storage = multer.diskStorage({
    destination: "public/sermonimages",
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '_' + file.originalname;
      cb(null, uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage }).single("image")

module.exports = upload;