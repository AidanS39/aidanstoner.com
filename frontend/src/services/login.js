import axios from 'axios'

const baseURL = "/api/login"

const postLogin = (login) => {
  const request = axios.post(`${baseURL}`, login)
  return request.then(response => response.data)
}

export default { postLogin }