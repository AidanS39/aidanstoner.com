import axios from 'axios'
const baseURL = "http://localhost:3001/api"

const getIntroduction = () => {
    const request = axios.get(`${baseURL}/introduction`)
    return request.then(response => response.data)
}

export default { getIntroduction }