// controllers/productController.js
const models = require('../models');

// Obtenir tous les produits
const getAllProducts = async (req, res) => {
  try {
    const products = await models.Product.findAll();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer un nouveau produit avec image upload
const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const imageUrl = req.file.path; // Chemin de l'image stockée
  try {
    const newProduct = await models.Product.create({ name, price, description, imageUrl });
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getAllProducts, createProduct };
