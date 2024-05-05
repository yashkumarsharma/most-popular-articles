import moment from 'moment'

const THUMBNAIL = 'Standard Thumbnail'
const MEDIUMIMAGE = 'mediumThreeByTwo210'
const LARGEIMAGE = 'mediumThreeByTwo440'

const getImage = (media = [], type = '') => {
  const image = media.find(m => m.type === 'image') || {}
  const imageMetaData = image['media-metadata'] || []
  const imageData = imageMetaData.find((item) => item?.format === type) || {}
  return imageData.url || ''
}

const getThumbnailImage = (media) => {
  return getImage(media, THUMBNAIL)
}

const getMediumImage = (media) => {
  return getImage(media, MEDIUMIMAGE)
}

const getLargeImage = (media) => {
  return getImage(media, LARGEIMAGE)
}

const formatDate = (dateString) => {
  if(!dateString) return ''
  const parsedDate = moment(dateString)
  const formattedDate = parsedDate.format('DD MMM YYYY')
  return formattedDate
}

export {
  getThumbnailImage,
  getMediumImage,
  getLargeImage,
  formatDate,
}
