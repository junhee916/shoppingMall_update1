const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message : "get product"
    })
})

router.post("/", (req, res) => {

    const newProduct = {
        name : req.body.productName,
        price : req.body.productPrice
    }
    res.json({
        message : "register product",
        productInfo : newProduct
    })
})

router.patch("/", (req, res) => {
    res.json({
        message : "updated product"
    })
})

router.delete("/", (req, res) => {
    res.json({
        message : "deleted product"
    })
})

module.exports = router