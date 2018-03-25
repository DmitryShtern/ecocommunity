import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { NewsArray, Article } from "./"
import { Switch, Route } from "react-router-dom"

const FeedContainer = styled.div`
  margin: 3% 0;
  width: 65%;
  background-color: #f9f9e0;
  position: absolute;
  left: 5%;
`

const Feed = ({ news, article, getNews, getArticle }) => (
  <FeedContainer>
    <Switch>
      <Route
        exact
        path="/news"
        render={props => (
          <NewsArray {...props} news={news} getNews={getNews} getArticle={getArticle} />
        )}
      />
      <Route
        path="/news/:id"
        render={props => <Article {...props} article={article} getArticle={getArticle} />}
      />
    </Switch>
  </FeedContainer>
)

export default Feed
