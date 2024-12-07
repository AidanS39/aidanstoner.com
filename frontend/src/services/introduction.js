import axios from 'axios'

const baseURL = "/api/introduction"

const getIntroduction = () => {
  const request = axios.get(`${baseURL}`)
  return request.then(response => response.data)
}

export default { getIntroduction }