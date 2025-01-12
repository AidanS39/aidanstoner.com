import axios from 'axios'

const baseURL = "/api/projects"

const getAllProjects = () => {
    const request = axios.get(`${baseURL}`)
    return request.then(response => response.data)
}

const addProject = () => {

}

const modifyProject = () => {

}

export default { getAllProjects, addProject, modifyProject }