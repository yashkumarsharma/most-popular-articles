import React from 'react'
import ArticleList from '../ArticleList'
import { mockArticles } from '../../../mockData'

describe('<ArticleList />', () => {
  beforeEach(() => {
    cy.readFile('./src/index.css').then((cssContent) => {
      cy.document().then((doc) => {
        const style = doc.createElement('style')
        style.innerHTML = cssContent
        doc.head.appendChild(style)
      })
    })
  })

  it('renders when articles provided', () => {
    cy.mount(<ArticleList isLoading={false} articles={mockArticles} />)
  })

  it('renders loading state correctly', () => {
    cy.mount(<ArticleList isLoading={true} />)
  })

  it('triggers onClick callback on click', () => {
    const onClick = cy.stub().as('onClick')

    cy.mount(
      <ArticleList
        articles={mockArticles}
        onClick={onClick}
      />
    )
      .get('.list-card')
      .click()
      .then(() => {
        expect(onClick).to.be.calledOnce
        expect(onClick).to.be.calledWith(mockArticles[0].id)
      })
  })
})