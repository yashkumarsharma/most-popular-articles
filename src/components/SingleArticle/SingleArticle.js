import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'

import { getLargeImage, formatDate } from '../../utils'
import Tags from '../Tags'

const SingleArticle = (props) => {
  const {
    article = {},
    isLoading = false,
  } = props

  const {
    title,
    abstract,
    published_date,
    byline,
    media,
    adx_keywords = '',
    des_facet,
    org_facet,
    per_facet,
    geo_facet,
  } = article

  const image = getLargeImage(media)
  const keywords = adx_keywords.split(';').filter(Boolean)

  return (
    <>
      {!!isLoading && (
        <Skeleton
          className='bg-gray-400 p-80 flex h-full w-full'
        />
      )}
      {!isLoading && (
        <div className='overflow-y-auto md:w-3/5 bg-gray-100 p-4 md:mt-0 mt-4' data-testid='article-details'>
          <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
          <div className='mb-4 text-center'>
            <img src={image} alt={title} className='article-image w-full mx-auto rounded-lg shadow-lg' />
            <div className='flex flex-row justify-between max-w-2/3 mx-auto'>
              <div className='text-sm text-gray-600' data-testid='date-details'>
                Published on {formatDate(published_date)}
              </div>
              <div className='text-sm text-gray-600'>{byline}</div>
            </div>
          </div>
          <p className='mb-4'>{abstract}</p>
          <Tags
            title='Descriptive Terms'
            content={des_facet}
          />
          <Tags
            title='Organizations'
            content={org_facet}
          />
          <Tags
            title='Persons'
            content={per_facet}
          />
          <Tags
            title='Locations'
            content={geo_facet}
          />
          <Tags
            title='Keywords'
            content={keywords}
          />
        </div>
      )}
    </>
  )
}

SingleArticle.propTypes = {
  article: PropTypes.shape({}),
  isLoading: PropTypes.bool,
}

export default SingleArticle
