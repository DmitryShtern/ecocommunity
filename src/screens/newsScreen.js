import React, { Component } from "react"
import { Feed, Filter } from "../components"

class newsScreen extends Component {
  render() {
    const { news, article, getNews, getArticle } = this.props

    return (
      <div>
        <Feed news={news} article={article} getNews={getNews} getArticle={getArticle} />
        <Filter getNews={getNews} />
      </div>
    )
  }
}

export default newsScreen
