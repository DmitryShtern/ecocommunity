import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { NewsFilter, NewsArticleFilter } from "./"

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsArticleIsOpen: false,
    }
  }

  // static propTypes = {}

  render() {
    const Filter = () => (this.state.newsArticleIsOpen ? <NewsArticleFilter /> : <NewsFilter />)

    return Filter()
  }
}
