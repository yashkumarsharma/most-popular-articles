import {
  GET_POPULAR_ARTICLES_REQUEST,
  GET_POPULAR_ARTICLES_SUCCESS,
  GET_POPULAR_ARTICLES_FAILURE,
} from './actions'

const initialState = {
  isLoading: false,
  articles: [],
  error: false,
}

// Use ImmutableJS for better state operations
function popularArticlesReducer(state = initialState, action) {
  switch (action.type) {
  case GET_POPULAR_ARTICLES_REQUEST:
    return { ...state, isLoading: true, error: false }
  case GET_POPULAR_ARTICLES_SUCCESS:
    return { ...state, isLoading: false, articles: action.data?.results || [] }
  case GET_POPULAR_ARTICLES_FAILURE:
    return { ...state, isLoading: false, error: true }
  default:
    return state
  }
}

export default popularArticlesReducer
