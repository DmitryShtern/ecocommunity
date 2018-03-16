import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { loadNews, loadArticle } from "../actions"
// import { Link, browserHistory } from "react-router"
// import { NewsFeed, Filter } from "../components"
import { default as newsScreen } from "../screens/newsScreen"

// const NewsPage = ({ actions, activePage }) => (
//   <div>
//     {/* News Page */}
//     <NewsFeed />
//     <Filter />
//   </div>
// )

// NewsPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   // news: PropTypes.array.isRequired,
//   // articleIsOpen: PropTypes.bool.isRequired,
// }

const mapStateToProps = state => ({
  news: state.newsFeed.news,
  article: state.newsFeed.article,
  // news: state.newsPage.news,
  // articleIsOpen: state.newsPage.articleIsOpen,
})

const mapDispatchToProps = {
  loadNews,
  loadArticle,
}

export default connect(mapStateToProps, mapDispatchToProps)(newsScreen)
