import React from 'react'
import renderer from 'react-test-renderer'

import Tags from '../Tags'

describe('check Tags', () => {
  it('renders null when no props passed', () => {
    const tree = renderer
      .create(<Tags />)

    expect(tree.root.children).toStrictEqual([])
  })
})
