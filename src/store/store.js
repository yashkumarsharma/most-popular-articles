import { configureStore } from '@reduxjs/toolkit'

import popularArticlesReducer from '../containers/Homepage/store/reducer'

const store = configureStore({
  reducer: {
    popularArticles: popularArticlesReducer,
  },
})

export default store