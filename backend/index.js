const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

const Introduction = require('./models/introduction')
const Experience = require('./models/experiences')
const Certification = require('./models/certifications')
const Education = require('./models/education')
const Project = require('./models/projects')

app.use(cors())
// app.use(express.static('dist'))
app.use(express.json())

app.get('/api/introduction', (request, response) => {
  Introduction.find({})
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(404).end()
    })
})
app.post('/api/introduction', (request, response) => {
  const body = request.body

  if (body.text === undefined) {
    response.status(404).json({ error: 'content missing' })
  }

  const introduction = new Introduction({
    name: body.name,
    text: body.text,
  })

  introduction.save()
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).send('error: bad request', error)
    })
})

app.get('/api/experiences', (request, response) => {
  Experience.find({})
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(404).end()
    })
})
app.get('/api/experiences/:id', (request, response) => {
  Experience.findById(request.params.id)
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).end()
    })
})
app.post('/api/experiences', (request, response) => {
  const body = request.body

  if (body.title === undefined) {
    response.status(400).json({ error: 'content missing' })
  }

  const experience = new Experience({
    title: body.title,
    employer: body.employer,
    location: body.location,
    description: body.description,
    startDate: body.startDate,
    endDate: body.endDate,
    stillWorking: body.stillWorking,
    skills: body.skills
  })
  experience.save()
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).send('error: bad request', error)
    })
})

app.get('/api/certifications', (request, response) => {
  Certification.find({})
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(404).end()
    })
})
app.get('/api/certifications/:id', (request, response) => {
  Certification.findById(request.params.id)
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).end()
    })
})
app.post('/api/certifications', (request, response) => {
  const body = request.body
  
  if (body.name === undefined) {
    response.status(400).json({ error: 'content missing' })
  }

  const certification = new Certification({
    name: body.name,
    issuedBy: body.issuedBy,
    issueDate: body.issueDate,
    expirationDate: body.expirationDate,
    link: body.link,
    image: body.image
  })

  certification.save()
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).send('error: bad request', error)
    })
})

app.get('/api/education', (request, response) => {
  Education.find({})
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(404).end()
    })
})
app.get('/api/education/:id', (request, response) => {
  Education.findById(request.params.id)
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).end()
    })
})
app.post('/api/education', (request, response) => {
  const body = request.body
  
  if (body.name === undefined) {
    response.status(400).json({ error: 'content missing' })
  }

  const education = new Education({
    name: body.name,
    educationLevel: body.educationLevel,
    school: body.school,
    major: body.major,
    specialization: body.specialization,
    gpa: body.gpa,
    startDate: body.startDate,
    endDate: body.endDate,
    currentlyAttending: body.currentlyAttending
  })

  education.save()
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).send('error: bad request', error)
    })
})

app.get('/api/projects', (request, response) => {
  Project.find({})
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(404).end()
    })
})
app.get('/api/projects/:id', (request, response) => {
  Project.findById(request.params.id)
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).send('error: bad request', error)
    })
})
app.post('/api/projects', (request, response) => {
  const body = request.body
  
  if (body.name === undefined) {
    response.status(400).json({ error: 'content missing'})
  }

  const project = new Project({
    name: body.name,
    shortDescription: body.shortDescription,
    description: body.description,
    toolsUsed: body.toolsUsed,
    link: body.link,
    image: body.image,
    started: body.started,
    completed: body.completed,
    comments: body.comments
  })

  project.save()
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(400).send('error: bad request', error)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})