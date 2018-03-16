import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { NewsArray, Article } from "./"
import { Switch, Route } from "react-router-dom"

export default class NewsFeed extends Component {
  render() {
    const Feed = styled.div`
      margin: 3% 0;
      width: 65%;
      background-color: #f9f9e0;
      position: absolute;
      left: 5%;
    `

    return (
      <Feed>
        {/* <NewsArray/> */}
        <Switch>
          <Route exact path="/news/" component={NewsArray} />
          <Route path="/news/:articleId" component={Article} />
        </Switch>
      </Feed>
    )
  }
}
