import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { default as News } from "../constants/News"

export default class NewsArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // news: News,
    }
  }

  static propTypes = {}

  render() {
    const Feed = styled.div`
      margin: 3% 0;
      width: 65%;
      height: ${this.state.news.length * 550 + 50}px;
      background-color: #f9f9e0;
      position: absolute;
      left: 5%;
    `

    const News = styled.div`
      margin: 50px 5%;
      height: 500px;
      background-color: #333;
      color: #fff;
      position: relative;
      font-size: 1vw;
      font-family: Arial;
    `

    const NewsPreview = styled.img`
      width: 100%;
      height: 300px;
      object-fit: cover;
    `

    const NewsMask = styled.div`
      background: linear-gradient(#0000, #000d);
      color: #fff;
      width: 100%;
      height: 300px;
      position: absolute;
      top: 0;
      cursor: pointer;
    `

    const NewsTitle = styled.label`
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

    const NewsDescription = styled.div`
      margin: 15px 25px;
      height: 165px;
      color: #fff;
      font-size: 1.2vw;
    `

    const NewsMore = styled.label`
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

    const NewsInfoDiv = styled.div`
      position: absolute;
      ${props => props.position}: 25px;
      bottom: 25px;
      color: #fff;
    `

    const NewsNotFound = styled.div`
      top: 7px;
      text-align: center;
      font-size: 2vw;
      position: relative;
    `

    const NewsArray = this.state.news.map(news => {
      // if (news.title.length > 50) {
      //   news.title = news.title.slice(0, 50) + "..."
      // }
      news.description =
        news.description.length > 400
          ? news.description.slice(0, 400) + "... "
          : news.description + " "
      news.date =
        news.date.substr(8, 2) + "." + news.date.substr(5, 2) + "." + news.date.substr(0, 4)
      news.tags = news.tags.map((tag, idx) => {
        return <NewsMore key={idx}>{tag} </NewsMore>
      })

      return (
        <News key={news.id}>
          <NewsPreview src={news.preview} />
          <NewsMask>
            <NewsTitle>{news.title}</NewsTitle>
          </NewsMask>
          <NewsDescription>
            {news.description}
            <NewsMore>Открыть новость</NewsMore>
          </NewsDescription>
          <NewsInfoDiv position={"left"}>Тэги: {news.tags}</NewsInfoDiv>
          <NewsInfoDiv position={"right"}>
            Дата: <NewsMore>{news.date}</NewsMore>
          </NewsInfoDiv>
        </News>
      )
    })

    const NewsArticle = {}

    const FeedNews =
      this.state.news.length > 0 ? (
        NewsArray
      ) : (
        <NewsNotFound>По данному запросу новости не найдены!</NewsNotFound>
      )

    return <div>{NewsArticle}</div>
  }
}