import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { News } from "../constants"

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // article: props.article,
      article: News[props.match.params.id],
    }
  }

  componentDidMount() {
    // this.props.getArticle(this.props.match.params.id)
    console.log("article: " + this.state.article)
    console.log("id: " + this.props.match.params.id)
  }

  render() {
    const Article = styled.div`
      margin: 50px 5%;
      padding-bottom: 50px;
      background-color: #333;
      color: #fff;
      position: relative;
      font-size: 1vw;
      font-family: Arial;
    `

    const ArticlePreview = styled.img`
      width: 100%;
      height: 400px;
      object-fit: cover;
    `

    const ArticleMask = styled.div`
      background: linear-gradient(#0000, #000d);
      color: #fff;
      width: 100%;
      height: 400px;
      position: absolute;
      top: 0;
      cursor: pointer;
    `

    const ArticleTitle = styled.label`
      position: absolute;
      left: 20px;
      bottom: 20px;
      font-size: 2.1vw;
      color: #fff;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    `

    const ArticleDescription = styled.div`
      margin: 15px 25px;
      color: #fff;
      font-size: 1.2vw;
    `

    const ArticleMore = styled.label`
      color: #57bf5d;
      cursor: pointer;

      :hover {
        color: #49d851;
        text-decoration: underline;
      }

      :active {
        color: #478e4a;
      }
    `

    const ArticleInfoDiv = styled.div`
      position: absolute;
      ${props => props.position}: 25px;
      bottom: 25px;
      color: #fff;
    `

    const ArticleNotFound = styled.div`
      padding: 7px;
      text-align: center;
      font-size: 1.5vw;
    `

    const Content = () => {
      if (this.state.article !== null) {
        const date =
          this.state.article.date.substr(8, 2) +
          "." +
          this.state.article.date.substr(5, 2) +
          "." +
          this.state.article.date.substr(0, 4)
        console.log("date: " + this.state.article.date)

        const tags = this.state.article.tags.map((tag, idx) => {
          return <ArticleMore key={idx}>{tag} </ArticleMore>
        })

        const article = this.state.article
        article.date = date
        article.tags = tags

        return (
          <Article>
            <ArticlePreview src={article.preview} />
            <ArticleMask>
              <ArticleTitle>{article.title}</ArticleTitle>
            </ArticleMask>
            <ArticleDescription>{article.description}</ArticleDescription>
            <ArticleInfoDiv position={"left"}>Тэги: {article.tags}</ArticleInfoDiv>
            <ArticleInfoDiv position={"right"}>
              Дата: <ArticleMore>{article.date}</ArticleMore>
            </ArticleInfoDiv>
          </Article>
        )
      } else {
        return <ArticleNotFound>Новость не найдена.</ArticleNotFound>
      }
    }

    return <div>{Content()}</div>
  }
}
