import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as Actions from "../actions"
// import { Link, browserHistory } from "react-router"
import { NewsFeed } from "../components"

const NewsPage = ({ actions, activePage }) => (
  <div>
    {/* News Page */}
    <NewsFeed />
  </div>
)

NewsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  // news: PropTypes.array.isRequired,
  // newsArticleIsOpen: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  activePage: state.router.activePage,
  // news: state.newsPage.news,
  // newsArticleIsOpen: state.newsPage.newsArticleIsOpen,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage)
