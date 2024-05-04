import React, { useEffect } from 'react'

import fetchArticles from '../../apis'

const Homepage = () => {
  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <>
      Yash
    </>
  )
}

export default Homepage
