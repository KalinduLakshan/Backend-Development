const express = require("express");
const productController = require("../controllers/product.controller");
const router = express.Router();

//POST the data
router.post("/", productController.createProducts);

//GET all the data
router.get("/", productController.getAllProducts);

//GET by id
router.get("/:id", productController.getProductById);

//UPDATE a product
router.put("/:id", productController.updateProduct);

//DELETE a product
router.delete("/:id", productController.deleteProduct);

module.exports = router;