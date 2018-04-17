import React, { Component } from "react"
import { News, Filter } from "../components"
import styled from "styled-components"

class newsScreen extends Component {
  componentWillMount() {
    this.props.getNews(this.props.query)
    console.log("news screen did mount")
    console.log("query: " + this.props.query)
  }

  render() {
    const { news, isFetching } = this.props

    const Feed = styled.div`
      margin: 60px 0;
    `

    return (
      <Feed>
        <Filter />
        <News news={news} isFetching={isFetching} />
      </Feed>
    )
  }
}

export default newsScreen
