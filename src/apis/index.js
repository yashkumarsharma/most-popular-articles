// Using this single file for now,
// As the project grow bigger we can split into multiple files
// Or util containing axios configuration
import axios from 'axios'

const fetchArticles = async () => {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`
  return await axios({ url })
}

export default fetchArticles
