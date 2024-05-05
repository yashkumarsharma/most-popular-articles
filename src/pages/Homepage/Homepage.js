import { useEffect  } from 'react'

const Homepage = (props) => {
  const { fetchArticles, articles } = props

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return (
    <>Yash from Homepage {JSON.stringify(articles)}</>
  )
}

export default Homepage
