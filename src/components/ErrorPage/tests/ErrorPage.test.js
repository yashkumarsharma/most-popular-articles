import React from 'react'
import renderer from 'react-test-renderer'

import ErrorPage from '../ErrorPage'


describe('check ErrorPage', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ErrorPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
