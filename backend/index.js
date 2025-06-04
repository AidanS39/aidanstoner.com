require('dotenv').config()

const express = require("express")
const cors = require("cors")

// Models
const Project = require('./models/project')
const Certification = require('./models/certification')
const certification = require('./models/certification')
const { Error } = require('mongoose')

const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.get('/', (request, response) => {

})

app.post('/', (request, response) => {
    
})

app.put('/', (request, response) => {
    
})

app.delete('/', (request, response) => {
    
})

// Introduction
app.get('/api/introduction', (request, response) => {
    response.send("hi! intro")
})

// Projects
app.get('/api/projects', (request, response) => {
    Project.find({})
        .then(projects => {
            response.status(200).json(projects)
        })
        .catch(error => {
            response.status(404).end()
        })
})

app.post('/api/projects', (request, response) => {
    const body = request.body

    const project = new Project({
        image: body.image,
        title: body.title,
        text: body.text,
        link: body.link,
        linkTitle: body.linkTitle
    })
    project.save()
        .then(savedProject => {
            response.status(200).json(savedProject)
        })
        .catch(error => {
            response.status(404).end()
        })
})



// Certifications
app.get('/api/certifications', (request, response) => {
    Certification.find({})
        .then(certifications => {
            response.status(200).json(certifications)
        })
        .catch(error => {
            response.status(404).end()
        })
})

app.post('/api/certifications', (request, response) => {
    const body = request.body

    const certification = new Certification({
        icon: body.icon,
        alt: body.alt,
        link: body.link
    })
    certification.save()
        .then(savedCertification => {
            response.status(200).json(savedCertification)
        })
        .catch(error => {
            response.status(404).end()
        })
})



PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})