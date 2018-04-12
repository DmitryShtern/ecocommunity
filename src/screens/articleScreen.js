import React, { Component } from "react"
import { Article, Filter } from "../components"

class articleScreen extends Component {
  componentWillMount() {
    this.props.getArticle(this.props.id) //this.props.id
    console.log("article screen did mount")
    console.log("article: " + JSON.stringify(this.props.article))
    console.log("id: " + this.props.id)
  }

  render() {
    const { article, isFetching } = this.props

    return (
      <div>
        <Article article={article} isFetching={isFetching} />
        <Filter />
      </div>
    )
  }
}

export default articleScreen
