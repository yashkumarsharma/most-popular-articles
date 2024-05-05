import {
  getThumbnailImage,
  getMediumImage,
  getLargeImage,
  formatDate,
} from './index'

const mockMedia = [{
  'type': 'image',
  'subtype': 'photo',
  'caption': '',
  'copyright': 'Illustration by Tomi Um',
  'approved_for_syndication': 0,
  'media-metadata': [
    {
      'url': 'https://static01.nyt.com/images/magazine/27mag-ethicist/27mag-ethicist-thumbStandard.jpg',
      'format': 'Standard Thumbnail',
      'height': 75,
      'width': 75,
    },
    {
      'url': 'https://static01.nyt.com/images/magazine/27mag-ethicist/27mag-ethicist-mediumThreeByTwo210.jpg',
      'format': 'mediumThreeByTwo210',
      'height': 140,
      'width': 210,
    },
    {
      'url': 'https://static01.nyt.com/images/magazine/27mag-ethicist/27mag-ethicist-mediumThreeByTwo440.jpg',
      'format': 'mediumThreeByTwo440',
      'height': 293,
      'width': 440,
    },
  ],
}]

describe('check getThumbnailImage function', () => {
  it('returns empty string if media is not passed', () => {
    expect(getThumbnailImage()).toBe('')
  })

  it('returns correct url if media is passed', () => {
    expect(getThumbnailImage(mockMedia))
      .toBe('https://static01.nyt.com/images/magazine/27mag-ethicist/27mag-ethicist-thumbStandard.jpg')
  })
})

describe('check getMediumImage function', () => {
  it('returns empty string if media is not passed', () => {
    expect(getMediumImage()).toBe('')
  })

  it('returns correct url if media is passed', () => {
    expect(getMediumImage(mockMedia))
      .toBe('https://static01.nyt.com/images/magazine/27mag-ethicist/27mag-ethicist-mediumThreeByTwo210.jpg')
  })
})

describe('check getLargeImage function', () => {
  it('returns empty string if media is not passed', () => {
    expect(getLargeImage()).toBe('')
  })

  it('returns correct url if media is passed', () => {
    expect(getLargeImage(mockMedia))
      .toBe('https://static01.nyt.com/images/magazine/27mag-ethicist/27mag-ethicist-mediumThreeByTwo440.jpg')
  })
})

describe('check formatDate function', () => {
  it('Works fine when nothing is passed', () => {
    expect(formatDate()).toBe('')
  })

  it('Works fine when a date string is passed', () => {
    expect(formatDate('2024-05-05 00:00:09')).toBe('05 May 2024')
  })
})