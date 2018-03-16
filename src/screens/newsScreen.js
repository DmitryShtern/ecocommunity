import React, { Component } from "react"
import { NewsFeed, Filter } from "../components"

class newsScreen extends Component {
  render() {
    const { news, article, loadNews, loadArticle } = this.props

    return (
      <div>
        <NewsFeed news={news} article={article} loadNews={loadNews} loadArticle={loadArticle} />
        <Filter />
      </div>
    )
  }
}

export default newsScreen
