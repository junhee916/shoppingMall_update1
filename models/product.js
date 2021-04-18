//1
const mongoose = require('mongoose')

//2
const productSchema = mongoose.Schema(
    //4
    {
        name : String,
        price : Number
    },
    {
        timestamps : true
    }
)

//3
module.exports = mongoose.model("product", productSchema)

