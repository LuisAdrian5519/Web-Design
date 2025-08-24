const express = require('express')
const mongoose = require('mongoose');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express(); // A partir de ahora, app es tu servidor.

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/products", productRoute)

// Main
app.get('/', (req,res) => {
    res.send("Hello from Node API");
});

mongoose.connect('mongodb+srv://LuisAdrian:Luisanty1@cluster2.kg0ez2x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2')
  .then(() => {
    console.log('Connected to database')

    app.listen(3000, () => {
    console.log('Server is running on port 3000')
    });
  })
  .catch(() => {
    console.log('Connection failed')
  });