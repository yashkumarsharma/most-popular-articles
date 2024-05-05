import PropTypes from 'prop-types'
import { getThumbnailImage, formatDate } from '../../utils'

const ArticleList = (props) => {
  const {
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
        className='border rounded-lg p-4 hover:border-blue-500 flex items-center bg-gray-200 mb-2 h-20 w-full'
        data-testid='list-card'
      >
        <div className='mr-4 flex-shrink-0'>
          <img className='w-20 h-20 object-cover' src={image} alt={title} />
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
        {articles.map(renderList)}
      </div>
    </div>
  )
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func,
}

export default ArticleList
