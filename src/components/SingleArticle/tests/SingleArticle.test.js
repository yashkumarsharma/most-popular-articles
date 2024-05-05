import React from 'react'
import renderer from 'react-test-renderer'

import SingleArticle from '../SingleArticle'
import { mockArticle } from './mockData'

describe('check SingleArticle', () => {
  it('renders correctly when no article is passed', () => {
    const tree = renderer
      .create(<SingleArticle />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when article is passed', () => {
    const tree = renderer
      .create(<SingleArticle article={mockArticle} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders details correctly', () => {
    const tree = renderer
      .create(<SingleArticle article={mockArticle} />)

    expect(tree.root.findAllByProps({ 'data-testid': 'article-details' }).length).toBe(1)
  })

  it('renders correct published date', () => {
    const tree = renderer
      .create(<SingleArticle article={mockArticle} />)

    expect(tree.root.findByProps({ 'data-testid': 'date-details' }).children)
      .toStrictEqual([ 'Published on ', '22 Mar 2022' ])
  })
})
