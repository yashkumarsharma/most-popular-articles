import apiCall from '../../../apis'

import {
  GET_POPULAR_ARTICLES_REQUEST,
  GET_POPULAR_ARTICLES_SUCCESS,
  GET_POPULAR_ARTICLES_FAILURE,
} from './actions'

const fetchArticles = async (dispatch) => {
  const url = '/mostpopular/v2/viewed/1.json'
  dispatch({ type: GET_POPULAR_ARTICLES_REQUEST })
  try {
    const data = await apiCall({ url })
    dispatch({ type: GET_POPULAR_ARTICLES_SUCCESS, data: data.data })
  } catch (error) {
    dispatch({ type: GET_POPULAR_ARTICLES_FAILURE })
  }
}

export default fetchArticles
