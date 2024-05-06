import React from 'react'
import renderer from 'react-test-renderer'
import ArticleList from '../ArticleList'
import { mockArticles } from '../../../mockData'

describe('check ArticleList', () => {
  it('renders correctly when no articles passed', () => {
    const tree = renderer
      .create(<ArticleList />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when Component isLoading', () => {
    const tree = renderer
      .create(<ArticleList isLoading={true} articles={mockArticles} onClick={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when articles are passed', () => {
    const tree = renderer
      .create(<ArticleList isLoading={false} articles={mockArticles} onClick={() => {}} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correct numer of li elements', () => {
    const tree = renderer
      .create(<ArticleList isLoading={false} articles={mockArticles} />)

    expect(tree.root.findAllByProps({ 'data-testid': 'list-card' }).length).toBe(mockArticles.length)
  })

  it('renders correct date on li elements', () => {
    const tree = renderer
      .create(<ArticleList isLoading={false} articles={mockArticles} />)

    expect(tree.root.findByProps({ 'data-testid': 'date' }).children).toStrictEqual([ '22 Mar 2022' ])
  })
})
