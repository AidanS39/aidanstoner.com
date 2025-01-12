import axios from 'axios'

const baseURL = "/api/experiences"

const getAllExperiences = () => {
  const request = axios.get(`${baseURL}`)
  return request.then(response => response.data)
}

const addExperience = () => {

}

const modifyExperience = () => {
  
}

export default { getAllExperiences, addExperience, modifyExperience }
