import axios from 'axios'

const baseURL = "/api/introduction"

const getIntroduction = () => {
  const request = axios.get(`${baseURL}`)
  return request.then(response => response.data)
}

const addIntroduction = (newIntroduction) => {
  const request = axios.post(`${baseURL}`, newIntroduction)
  return request.then(response => response.data)
}

const modifyIntroduction = (modifiedIntroduction) => {
  const request = axios.put(`${baseURL}/${modifiedIntroduction.id}`, modifiedIntroduction)
  return request.then(response => response.data)
}

const deleteIntroduction = (deletedIntroduction) => {
  const request = axios.delete(`${baseURL}/${deletedIntroduction.id}`)
  return request.then(response => response.data)
}

export default { getIntroduction, addIntroduction, modifyIntroduction, deleteIntroduction }