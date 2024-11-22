import axios from 'axios'

const baseURL = "http://localhost:3001/api/certifications"

const getAllCertifications = () => {
  const request = axios.get(`${baseURL}`)
  return request.then(response => response.data)
}

export default { getAllCertifications }