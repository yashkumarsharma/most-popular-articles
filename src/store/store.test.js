import React from 'react'
import renderer from 'react-test-renderer'
// import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import Homepage from '../pages/Homepage'
import store from './store'

describe('Redux Store Test', () => {
  // const mockStore = configureStore()
  // const store = mockStore(initialState)

  it('test', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Homepage />
        </Provider>
      )

    expect(tree.root.findAllByProps({ 'data-testid': 'article-details' }).length).toBe(1)
  })
})
