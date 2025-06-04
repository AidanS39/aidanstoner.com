const mongoose = require("mongoose")

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

mongoose.connect(url)
    .then(result => {
        console.log('(MONGODB) connected to certifications')
    })
    .catch(error => {
        console.log('(MONGODB) error connecting to certifications:', error.message)
    })

const certificationSchema = new mongoose.Schema({
    icon: String,
    alt: String,
    link: String
})

certificationSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Certification', certificationSchema)