import { connect } from "react-redux"
import { getArticle } from "../actions"
import { articleScreen } from "../screens"

const mapStateToProps = state => ({
  article: state.article.article,
  isFetching: state.article.isFetching,
  id: state.routing.location.pathname.substr(6),
})

const mapDispatchToProps = {
  getArticle,
}

export default connect(mapStateToProps, mapDispatchToProps)(articleScreen)
