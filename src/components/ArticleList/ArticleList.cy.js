import React from 'react'
import ArticleList from './ArticleList'
import { mockArticles } from './mockData'

describe('<ArticleList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ArticleList articles={mockArticles} />)
  })
})