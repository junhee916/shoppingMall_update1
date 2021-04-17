const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const productRouter = require("./router/product")
const orderRouter = require("./router/order")

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use("/product", productRouter)
app.use("/order", orderRouter)

const PORT = 5000

app.get("/", (req, res) => {
    res.json({
        message : "get 요청 테스트"
    })
})

app.listen(PORT, console.log("서버 접속 완료"))