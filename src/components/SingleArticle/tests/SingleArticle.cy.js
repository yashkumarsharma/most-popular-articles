import React from 'react'

import SingleArticle from '../SingleArticle'
import { mockArticles } from '../../../mockData'
import { getLargeImage } from '../../../utils'

describe('<SingleArticle />', () => {
  beforeEach(() => {
    cy.readFile('./src/index.css').then((cssContent) => {
      cy.document().then((doc) => {
        const style = doc.createElement('style')
        style.innerHTML = cssContent
        doc.head.appendChild(style)
      })
    })
  })

  const article = mockArticles[0]

  const image = getLargeImage(article.media)

  it('renders', () => {
    cy.mount(<SingleArticle article={article} />)
  })

  it("renders article image correctly", () => {
    cy.mount(<SingleArticle article={article} />)

    cy
      .get('.article-image')
      .should('have.attr', 'src')
      .and('include', image);
  })
})