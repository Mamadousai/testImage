// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multer');

// Récupérer tous les produits
router.get('/', productController.getAllProducts);

// Créer un nouveau produit avec image upload
router.post('/', upload.single('image'), productController.createProduct);

module.exports = router;
