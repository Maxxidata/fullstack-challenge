import axios from 'axios'

const AxiosHttpClient = axios.create({
  baseURL: 'http://localhost::3000/api'
})

export default AxiosHttpClient
