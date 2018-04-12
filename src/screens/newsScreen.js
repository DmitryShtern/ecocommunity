import React, { Component } from "react"
import { News, Filter } from "../components"

class newsScreen extends Component {
  componentWillMount() {
    this.props.getNews(this.props.query)
    console.log("news screen did mount")
    console.log("query: " + this.props.query)
  }

  render() {
    const { news, isFetching } = this.props

    return (
      <div>
        <News news={news} isFetching={isFetching} />
        <Filter />
      </div>
    )
  }
}

export default newsScreen
