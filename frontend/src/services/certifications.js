import axios from 'axios'

const baseURL = "/api/certifications"

const getAllCertifications = () => {
  const request = axios.get(`${baseURL}`)
  return request.then(response => response.data)
}

const addCertification = () => {

}

const modifyCertification = () => {

}

export default { getAllCertifications, addCertification, modifyCertification }