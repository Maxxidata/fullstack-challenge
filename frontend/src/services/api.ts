import axios from 'axios'

const api = axios.create({
  baseURL: 'htttp://localhost:3333'
})

export default api;
