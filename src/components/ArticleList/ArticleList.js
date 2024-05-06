import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

import { getThumbnailImage, formatDate } from '../../utils'

const ArticleList = (props) => {
  const {
    isLoading = false,
    articles = [],
    onClick = () => {},
  } = props

  const renderList = (article = {}) => {
    const { title, media, id, published_date } = article
    const image = getThumbnailImage(media)

    return (
      <button
        key={id}
        onClick={() => onClick(id)}
        className='list-card border rounded-lg p-4 hover:border-blue-500 flex items-center bg-gray-200 mb-2 h-20 w-full'
        data-testid='list-card'
      >
        <div className='mr-4 flex-shrink-0'>
          {!!image && (
            <img className='w-20 h-20 object-cover' src={image} alt={title} />
          )}
        </div>
        <div>
          <p className='font-semibold line-clamp-2'>{title}</p>
          <div className='text-sm text-gray-500'>
            <p data-testid='date'>{formatDate(published_date)}</p>
          </div>
        </div>
      </button>
    )
  }

  return (
    <div className='md:w-2/5 md:max-h-full m-10'>
      <div>
        <h2 className='text-lg font-semibold mb-4'> Article List </h2>
        {!!isLoading && (
          <Skeleton
            count={10}
            key={`list-loader`}
            data-testid='list-loader'
            className='border rounded-lg p-4 hover:border-blue-500 flex-1 items-center bg-gray-200 mb-2 h-20 w-full'
          />
        )}
        {!isLoading && articles.map(renderList)}
      </div>
    </div>
  )
}

ArticleList.propTypes = {
  isLoading: PropTypes.bool,
  articles: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func,
}

export default ArticleList
