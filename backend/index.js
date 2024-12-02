const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

const Introduction = require('./models/introduction')
const Experience = require('./models/experiences')
const Certification = require('./models/certifications')
const Education = require('./models/education')
const Project = require('./models/projects')

const experiences = [
  {
    id: "1",
    title:"ISD Customer Support Center Intern",
    employer: "NJ Department of Military and Veterans Affairs",
    location: "Lawrenceville, NJ, USA",
    description: "Worked alongside the development team to create solutions for departments within DMAVA. Led the full-stack development of two web applications which offered more productive and secure workflows for end users. Utilized ASP.NET with C#, SQL, JavaScript, JQuery, and Bootstrap.",
    startDate: "May 2024",
    endDate: "",
    stillWorking: true,
    skills: ["ASP.NET","C#","SQL","HTML/CSS","JavaScript","jQuery","Bootstrap","Problem Solving", "Project Planning"]
  },
  {
    id: "2",
    title: "Host",
    employer: "Olive Garden",
    location: "Freehold, NJ, USA",
    description: "Communicated with guests and associates to ensure a pleasant dining experience.",
    startDate: "September 2023",
    endDate: "May 2024",
    stillWorking: false,
    skills: ["Leadership","Team Coordination"]
  },
  {
    id: "3",
    title: "Ride Operator",
    employer: "Six Flags Great Adventure",
    location: "Jackson Township, NJ, USA",
    description: "Responsible for the safety and efficiency of operations for 7 different rides at the theme park.",
    startDate: "July 2022",
    endDate: "August 2023",
    stillWorking: false,
    skills: ["Leadership","Team Coordination"]
  }
]

const certifications = [
  {
    id: "1",
    name: "Certified Cloud Practitioner",
    issuedBy: "Amazon Web Services (AWS)",
    issueDate: "September 2024",
    expirationDate: "September 2027",
    link: "https://www.credly.com/badges/733bd0c1-ef3a-4068-8cc3-470da5190c6f/linked_in_profile",
    image: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
  }
]

const education = [
  {
    id: "1",
    name: "The College of New Jersey",
    educationLevel: "Bachelors",
    school: "Science",
    major: "Computer Science",
    specialization: "Data Science",
    gpa: "3.961",
    startDate: "September 2023",
    endDate: "May 2027",
    currentlyAttending: true
  }
]

const projects = [
  {
    id: "1",
    name: "Packt BOTD",
    shortDescription: "Serverless Notification Application for Packt's Book of the Day using AWS Resources and Python.",
    description: "Packt Book of the Day is a serverless notification application that notifies users via email of Packt's featured free eBooks, which can be found here: https://www.packtpub.com/free-learning/. The featured free eBook that Packt offers changes every 24 hours. At a high level, PacktBOTD uses AWS serverless resources to every 24 hours, identify the name of the book and then email users of the new featured book.",
    toolsUsed: ["Python", "Shell", "boto3", "AWS"],
    link: "https://github.com/AidanS39/PacktBOTD",
    image: "https://github.com/AidanS39/PacktBOTD/raw/main/PacktBOTD_ArchitectureDrawing.svg?raw=true",
    started: true,
    completed: false,
    comments: ["blah blah blah, first comment", "second comment hahaha"]
  }
]

app.use(cors())
app.use(express.static('dist'))
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