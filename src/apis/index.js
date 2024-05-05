import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
  timeout: 1000,
})

// Can extend this to accept other methods
// Write now only configred for GET call
const apiCall = async ({ url }) => {
  const params = {
    'api-key': process.env.REACT_APP_API_KEY,
  }

  return await axiosInstance({ url, params })
}

export default apiCall
