import axios from 'axios'

const baseURL = "/api/logout"

const postLogout = () => {
  const request = axios.post(`${baseURL}`)
  return request.then(response => response.data)
}

export default { postLogout }