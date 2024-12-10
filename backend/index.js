require('dotenv').config()
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const Login = require('./models/login')
const Introduction = require('./models/introduction')
const Experience = require('./models/experiences')
const Certification = require('./models/certifications')
const Education = require('./models/education')
const Project = require('./models/projects')

const app = express()

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(cookieParser())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

function authenticateUser(request, response, next) {
  const authHeader = request.cookies['token']
  if (authToken === null) {
    return response.sendStatus(401)
  }
  jwt.verify(authToken, process.env.ACCESS_KEY, (error, user) => {
    if (error) {
      return response.sendStatus(403)
    }
    request.user = user
    next()
  })
}

app.post('/api/login', (request, response) => {
  if (!request.body.username) {
    response.status(404).json({ error: 'username missing' })
  }
  else if (!request.body.password) {
    response.status(404).json({ error: 'password missing' })
  }
  else {
    const username = request.body.username
    const password = request.body.password
    Login.findOne({ username: username, password: password })
      .then(account => {
        if (account === null) {
          response.status(403).json({ error: "invalid username or password" })
        }
        else {
          const token = jwt.sign({ name: username }, process.env.ACCESS_KEY, {expiresIn: '60m' })
          response.cookie('token', token, {
            maxAge: 3600000,
            httpOnly: true,
            secure: true,
            sameSite: true
          })
          response.cookie('username', username, {
            maxAge: 3600000,
            secure: true,
            sameSite: true
          })
          response.status(200).end()
        }
      })
      .catch(error => {
        response.status(403).json({ error: "invalid username or password" })
      })
  }
})

app.post('/api/logout', (request, response) => {
  if (request.cookies.token) {
    response.clearCookie('token')
    response.clearCookie('username')
    response.status(200).end()
  }
  else {
    response.status(404).json({ error: 'token missing' })
  }
})

app.get('/api/introduction', (request, response) => {
  Introduction.find({})
    .then(result => {
      response.json(result)
    })
    .catch(error => {
      response.status(404).end()
    })
})
app.post('/api/introduction', authenticateUser, (request, response) => {
  const body = request.body

  if (!(body.title && 
    body.paragraphs)) {
    response.status(404).json({ error: 'content missing' })
  }
  else {
    const introduction = new Introduction({
      title: body.title,
      paragraphs: body.paragraphs,
    })
  
    introduction.save()
      .then(result => {
        response.json(result)
      })
      .catch(error => {
        response.status(400).json({ error: 'bad request' })
      })
  }
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
app.post('/api/experiences', authenticateUser, (request, response) => {
  const body = request.body

  if (!(body.title && 
    body.employer && 
    body.location && 
    body.description && 
    body.startDate && 
    body.endDate && 
    body.stillWorking && 
    body.skills)) {
    response.status(400).json({ error: 'content missing' })
  }
  else {
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
        response.status(400).json({ error: 'bad request' })
      })
  }
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
  
  if (!(body.name && 
    body.issuedBy && 
    body.issueDate && 
    body.expirationDate && 
    body.link && 
    body.image)) {
    response.status(400).json({ error: 'content missing' })
  }
  else {
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
        response.status(400).json({ error: 'bad request' })
      })
  }
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
app.post('/api/education', authenticateUser, (request, response) => {
  const body = request.body
  
  if (!(body.name && 
    body.educationLevel && 
    body.school && 
    body.major && 
    body.specialization && 
    body.gpa && 
    body.startDate && 
    body.endDate && 
    body.currentlyAttending)) {
    response.status(400).json({ error: 'content missing' })
  }
  else {
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
        response.status(400).json({ error: 'bad request' })
      })
  }
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
app.post('/api/projects', authenticateUser, (request, response) => {
  const body = request.body
  
  if (!(body.name && 
    body.shortDescription && 
    body.description && 
    body.toolsUsed && 
    body.link && 
    body.image && 
    body.started && 
    body.completed && 
    body.comments)) {
    response.status(400).json({ error: 'content missing'})
  }
  else {
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
        response.status(400).json({ error: 'bad request' })
      })
  }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})