const mongoose = require("mongoose")

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

mongoose.connect(url)
    .then(result => {
        console.log('(MONGODB) connected to projects')
    })
    .catch(error => {
        console.log('(MONGODB) error connecting to projects:', error.message)
    })

const projectSchema = new mongoose.Schema({
    image: String,
    title: String,
    text: String,
    link: String,
    linkTitle: String
})

projectSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Project', projectSchema)