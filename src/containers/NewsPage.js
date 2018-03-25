import { connect } from "react-redux"
import { getNews, getArticle } from "../actions"
import { NewsScreen } from "../screens"

const mapStateToProps = state => ({
  news: state.newsFeed.news,
  article: state.newsFeed.article,
})

const mapDispatchToProps = {
  getNews,
  getArticle,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen)
