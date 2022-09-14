import axios from 'axios'
import errorResponsehandler from './errorResponsehandler'

const instance = axios.create({
  baseURL: `https://reqres.in/api/`,
})

instance.interceptors.response.use((response) => response, errorResponsehandler)

export default instance
