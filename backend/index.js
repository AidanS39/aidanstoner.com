const express = require('express')
const cors = require('cors')

const app = express()


const introduction = {
  name: "Introduction",
  text: "My name is Aidan Stoner and I am a sophomore majoring in Computer Science at The College of New Jersey. This website acts as both a portfolio and a resume, where you can see my personal work and experience. Everything you see on this website was developed by myself. The reason why I created the entire site myself was to gain experience in full-stack development."
}

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

//TO DO: Endpoints
app.get('/api/introduction', (request, response) => {
    response.json(introduction)
})

app.get('/api/experiences', (request, response) => {
    response.json(experiences)
})
app.get('/api/experiences/:id', (request, response) => {
  const experience = experiences.find(experience => experience.id === request.params.id)
  response.json(experience)
})

app.get('/api/certifications', (request, response) => {
    response.json(certifications)
})
app.get('/api/certifications/:id', (request, response) => {
  const certification = certifications.find(certification => certification.id === request.params.id)
  response.json(certification)
})

app.get('/api/education', (request, response) => {
    response.json(education)
})
app.get('/api/education/:id', (request, response) => {
  const school = education.find(school => school.id === request.params.id)
  response.json(school)
})

app.get('/api/projects', (request, response) => {
  response.json(projects)
})
app.get('/api/projects/:id', (request, response) => {
  const project = projects.find(project => project.id === request.params.id)
  response.json(project)
})

const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})