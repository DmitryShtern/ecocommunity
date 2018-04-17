import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { News } from "../constants"
// import { history } from "../store/configureStore"

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // article: props.article,
      article: props.article, // News[props.id],
      isFetching: props.isFetching,
    }
  }

  render() {
    console.log("article history: " + JSON.stringify(history))

    const { article, isFetching, history } = this.props

    // console.log("Article.js article: " + JSON.stringify(article))
    // console.log("Article.js isFetching: " + isFetching)

    const Article = styled.div`
      margin: 0 5% 60px;
      width: 65%;
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
    `

    const ArticleBackButton = styled.label`
      position: absolute;
      top: 20px;
      left: 20px;
      border: none;
      color: #fff;
      font-size: 1.5vw;
      text-align: center;
      cursor: pointer;
      text-shadow: 1px 1px #000, -1px 1px #000, -1px 0 #000, -1px -1px #000, 1px -1px #000,
        1px 0px #000;

      :hover {
        text-decoration: underline;
      }

      :active {
        color: #57bf5d;
      }
    `

    const ArticleFullScreen = styled.label`
      position: absolute;
      top: 20px;
      right: 20px;
      color: #fff;
      font-size: 1.5vw;
      text-align: center;
      cursor: pointer;
    `

    const ArticleTitle = styled.label`
      position: absolute;
      left: 20px;
      bottom: 20px;
      font-size: 2.1vw;
      color: #fff;
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

    const NewsArticle = () => {
      const date =
        article.date.substr(8, 2) +
        "." +
        article.date.substr(5, 2) +
        "." +
        article.date.substr(0, 4)

      const tags =
        article.tags === null
          ? null
          : article.tags.split(", ").map((tag, idx) => <ArticleMore key={idx}>{tag}</ArticleMore>)

      if (tags !== null) {
        for (let i = 0; i < tags.length - 1; i += 2) {
          tags.splice(i + 1, 0, ", ")
        }
      }

      return (
        <Article>
          <ArticlePreview src={article.preview} />
          <ArticleMask>
            <ArticleBackButton onClick={() => history.goBack()}>&#10094; Назад</ArticleBackButton>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleFullScreen>[ ]</ArticleFullScreen>
          </ArticleMask>
          <ArticleDescription>{article.description}</ArticleDescription>
          {tags !== null ? <ArticleInfoDiv position={"left"}>Тэги: {tags}</ArticleInfoDiv> : ""}
          <ArticleInfoDiv position={"right"}>
            Дата: <ArticleMore>{date}</ArticleMore>
          </ArticleInfoDiv>
        </Article>
      )
    }

    const content = isFetching ? (
      <ArticleNotFound>Загрузка...</ArticleNotFound>
    ) : article !== null ? (
      NewsArticle()
    ) : (
      <ArticleNotFound>Новость не найдена.</ArticleNotFound>
    )

    return content
  }
}
