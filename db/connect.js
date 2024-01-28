const mongoose = require('mongoose')


const connectionString = "mongodb+srv://Tasks:paOlo@cluster0.remm9dj.mongodb.net/?retryWrites=true&w=majority"

const connectDB = (url) => {
mongoose
 .connect(connectionString)
 .then(() =>console.log('CONNECTED TO THE DB...'))
 .catch((err) => console.log(err))

}


module.exports = connectDB