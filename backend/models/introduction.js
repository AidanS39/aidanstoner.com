const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URL)
    .then(result => {
        console.log('introduction connected to MongoDB')
    })
    .catch(error => {
        console.log('error occured when connecting to MongoDB: ', error)
    })

const introductionSchema = new mongoose.Schema({
    name: String,
    text: String
})

introductionSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Introduction', introductionSchema)