import React, { Component } from "react"
import { Article, Filter } from "../components"
import styled from "styled-components"

class articleScreen extends Component {
  componentWillMount() {
    this.props.getArticle(this.props.id) //this.props.id
    console.log("article screen did mount")
    // console.log("article: " + JSON.stringify(this.props.article))
    // console.log("id: " + this.props.id)
  }

  render() {
    const { article, isFetching, history } = this.props

    const Feed = styled.div`
      margin: 60px 0;
    `

    return (
      <Feed>
        <Filter />
        <Article article={article} isFetching={isFetching} history={history} />
      </Feed>
    )
  }
}

export default articleScreen
