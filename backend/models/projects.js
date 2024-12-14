const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGODB_URL)
    .then(result => {
        console.log('projects connected to MongoDB')
    })
    .catch(error => {
        console.log('error occured when connecting to MongoDB: ', error)
    })

const projectSchema = mongoose.Schema({
    name: String,
    shortDescription: String,
    description: [String],
    toolsUsed: [String],
    link: String,
    image: String,
    started: Boolean,
    completed: Boolean,
    comments: [String]
})

projectSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Project', projectSchema)