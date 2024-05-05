import { useEffect, useState } from 'react'

import {
  ArticleList,
  SingleArticle,
} from '../../components'

const Homepage = (props) => {
  const [selectedArticle, setSelectedArticle] = useState({})
  const { fetchArticles, articles = [], isLoading } = props

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  const handleArticleClick = (id) => {
    setSelectedArticle((articles || []).find((article) => article.id === id))
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (articles.length === 0) return

    if(!selectedArticle.id) {
      setSelectedArticle(articles[0])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles.length])

  return (
    <div className='flex flex-col-reverse md:flex-row'>
      <ArticleList
        isLoading={isLoading}
        selectedArticleId={selectedArticle?.id}
        articles={articles}
        onClick={handleArticleClick}
      />
      <SingleArticle
        isLoading={isLoading}
        article={selectedArticle}
      />
    </div>
  )
}

export default Homepage
