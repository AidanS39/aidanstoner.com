import axios from 'axios'
const baseURL = "http://localhost:3001/api"

const getProjects = () => {
    const request = axios.get(`${baseURL}/projects`)
    return request.then(response => response.data)
}

export default { getProjects }