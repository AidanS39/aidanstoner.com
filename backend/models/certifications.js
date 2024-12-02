const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URL)
    .then(result => {
        console.log('certification connected to MongoDB')
    })
    .catch(error => {
        console.log('error occured when connecting to MongoDB: ', error)
    })

const certificationSchema = mongoose.Schema({
    name: String,
    issuedBy: String,
    issueDate: String,
    expirationDate: String,
    link: String,
    image: String
})

certificationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Certification', certificationSchema)