import { useEffect, useState } from 'react'

import {
  ArticleList,
  SingleArticle,
} from '../../components'

const Homepage = (props) => {
  const [selectedArticle, setSelectedArticle] = useState({})
  const { fetchArticles, articles = [] } = props

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  const handleArticleClick = (id) => {
    setSelectedArticle(articles.find((article) => article.id === id))
  }

  useEffect(() => {
    if (articles.length === 0) return

    if(!selectedArticle.id) {
      setSelectedArticle(articles[0])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles.length])

  return (
    <>
      <ArticleList
        articles={articles}
        onClick={handleArticleClick}
      />
      <SingleArticle article={selectedArticle} />
    </>
  )
}

export default Homepage
