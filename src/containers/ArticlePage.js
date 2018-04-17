import { connect } from "react-redux"
import { getArticle } from "../actions"
import { articleScreen } from "../screens"
import { history } from "../store/configureStore"

const mapStateToProps = state => ({
  article: state.article.article,
  isFetching: state.article.isFetching,
  id: state.routing.location.pathname.substr(6),
  history: history,
})

const mapDispatchToProps = {
  getArticle,
}

export default connect(mapStateToProps, mapDispatchToProps)(articleScreen)
