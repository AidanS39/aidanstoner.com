const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URL)
    .then(result => {
        console.log('experience connected to MongoDB')
    })
    .catch(error => {
        console.log('error occured when connecting to MongoDB: ', error)
    })

const experienceSchema = mongoose.Schema({
    title: String,
    employer: String,
    location: String,
    description: String,
    startDate: String,
    endDate: { type: String, default: ''},
    stillWorking: Boolean,
    skills: [String]
})

experienceSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Experience', experienceSchema)