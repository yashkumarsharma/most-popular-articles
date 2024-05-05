import React from 'react'
import renderer from 'react-test-renderer'

import Homepage from './Homepage'
import { mockArticles } from './mockData'

describe('check Homepage', () => {
  it('renders correctly when no data is passed', () => {
    const tree = renderer
      .create(<Homepage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when data is passed', () => {
    const tree = renderer
      .create(<Homepage articles={mockArticles} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders details correctly', () => {
    const tree = renderer
      .create(<Homepage articles={mockArticles} />)

    expect(tree.root.findAllByProps({ 'data-testid': 'article-details' }).length).toBe(1)
  })
})
