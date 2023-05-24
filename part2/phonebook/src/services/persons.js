import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(request => request.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(request => request.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(request => request.data)
}

const destroy = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(request => request.data)
}

export default {getAll, update, create, destroy}