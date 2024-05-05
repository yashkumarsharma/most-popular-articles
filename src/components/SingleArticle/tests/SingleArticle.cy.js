import React from 'react'

import SingleArticle from '../SingleArticle'
import { mockArticle } from './mockData'

describe('<SingleArticle />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SingleArticle article={mockArticle} />)
  })
})