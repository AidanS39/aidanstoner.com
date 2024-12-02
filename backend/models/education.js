const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URL)
    .then(result => {
        console.log('education connected to MongoDB')
    })
    .catch(error => {
        console.log('error occured when connecting to MongoDB: ', error)
    })

const educationSchema = mongoose.Schema({
    name: String,
    educationLevel: String,
    school: String,
    major: String,
    specialization: String,
    gpa: mongoose.Decimal128,
    startDate: String,
    endDate: { type: String, default: '' },
    currentlyAttending: Boolean
})

educationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Education', educationSchema)