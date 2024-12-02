import axios from 'axios'

const baseURL = "/api/education"

const getAllEducation = () => {
    const request = axios.get(`${baseURL}`)
    return request.then(response => response.data)
}

export default { getAllEducation }