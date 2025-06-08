import axios from 'axios'
const baseURL = "http://localhost:3001/api"

const getCerts = () => {
    const request = axios.get(`${baseURL}/certifications`)
    return request.then(response => response.data)
}

export default { getCerts }