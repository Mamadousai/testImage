// app.js
const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');


// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Routes des produits
app.use('/products', productRoutes);

// Synchroniser Sequelize avec la base de données


// Port d'écoute du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
