const mongoose = require("mongoose")

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
    .connect(process.env.MONGODB_URI, dbOptions)
    .then(() => console.log("mongodb connected ..."))
    .catch(err => console.log(err))