const mongoose = require('mongoose')


const connectionString = "mongodb+srv://bolu:Bolu8849.2024@cluster0.ltzmdke.mongodb.net/?retryWrites=true&w=majority"

const connectDB = (url) => {
mongoose
 .connect(connectionString)
 .then(() =>console.log('CONNECTED TO THE DB...'))
 .catch((err) => console.log(err))

}


module.exports = connectDB