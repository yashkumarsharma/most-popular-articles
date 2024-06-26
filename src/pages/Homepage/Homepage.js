import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
  ArticleList,
  SingleArticle,
  ErrorPage,
} from '../../components'

const Homepage = (props) => {
  const [selectedArticle, setSelectedArticle] = useState({})
  const {
    fetchArticles = () => {},
    articles = [],
    error = false,
    isLoading = false,
  } = props

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
    <>
      {!!error && <ErrorPage />}
      {!error && (
        <div
          className='flex flex-col-reverse md:flex-row'
          data-testid={`${error ? 'error-container' : 'container'}`}
        >
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
      )}
    </>
  )
}

Homepage.propTypes = {
  fetchArticles: PropTypes.func,
  articles: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
}

export default Homepage
