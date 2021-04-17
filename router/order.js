const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.json({
        message : "get order"
    })
})

router.post("/", (req, res) => {
    res.json({
        message : "register order"
    })
})

router.patch("/", (req, res) => {
    res.json({
        message : "updated order"
    })
})

router.delete("/", (req, res) => {
    res.json({
        message : "delete order"
    })
})

module.exports = router