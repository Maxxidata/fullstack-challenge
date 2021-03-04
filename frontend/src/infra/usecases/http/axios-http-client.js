import axios from 'axios'

const AxiosHttpClient = axios.create({
  baseURL: process.env.API_URL
})

export default AxiosHttpClient
