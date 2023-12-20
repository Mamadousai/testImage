// config/multer.js
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Dossier de destination pour stocker les images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nom du fichier unique
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
