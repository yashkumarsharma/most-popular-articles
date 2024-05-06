import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import Homepage from '../Homepage'
import store from '../../../store/store'
import { mockArticles } from '../../../mockData'
// import fetchArticles from '../store/saga'

const fetchArticles = jest.fn()

describe('check Homepage Container', () => {
  it('renders correctly when no props is passed', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Homepage />
        </Provider>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when article is passed', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Homepage articles={mockArticles} />
        </Provider>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when isLoading is true', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Homepage fetchArticles={fetchArticles} isLoading={true} articles={mockArticles} />
        </Provider>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when error is true', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Homepage fetchArticles={fetchArticles} isLoading={false} error={true} articles={mockArticles} />
        </Provider>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('container should be displayed', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Homepage fetchArticles={fetchArticles} />
        </Provider>
      )

    expect(tree.root.findAllByProps({ 'data-testid': 'container' }).length)
      .toBe(1)
  })
})
