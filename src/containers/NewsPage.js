import { connect } from "react-redux"
import { getNews, getArticle } from "../actions"
import { newsScreen } from "../screens"

const mapStateToProps = state => ({
  news: state.news.news,
  isFetching: state.news.isFetching,
  query: state.routing.location.search,
})

const mapDispatchToProps = {
  getNews,
  getArticle,
}

export default connect(mapStateToProps, mapDispatchToProps)(newsScreen)
