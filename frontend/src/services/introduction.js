import axios from 'axios'

const baseURL = "http://localhost:3001/api/introduction"

const getIntroduction = () => {
  const request = axios.get(`${baseURL}`)
  return request.then(response => response.data[0])
}

export default { getIntroduction }