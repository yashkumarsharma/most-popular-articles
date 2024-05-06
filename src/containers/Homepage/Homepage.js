import { connect } from 'react-redux'
import fetchArticles from './store/saga'
import Homepage from '../../pages/Homepage'

const mapStateToProps = ({ popularArticles }) => ({
  isLoading: popularArticles.isLoading,
  articles: popularArticles.articles,
  error: popularArticles.error,
})

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => fetchArticles(dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
