const express = require("express");
const Product = require("../models/products");
const router = express.Router();


router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;
