import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: this.props.news,
      isFetching: this.props.isFetching,
    }
  }

  render() {
    const { news, isFetching } = this.props

    const News = styled.div`
      margin: 0 5% 60px;
      width: 65%;
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
        color: #ccc;
      }

      :active {
        text-decoration: none;
        color: #fff;
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

    const NewsLink = styled(Link)`
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
      padding: 7px;
      text-align: center;
      font-size: 1.5vw;
    `

    const NewsArray = news.map(news => {
      const description =
        news.description.length > 400
          ? news.description.slice(0, 400) + "... "
          : news.description + " "

      const date =
        news.date.substr(8, 2) + "." + news.date.substr(5, 2) + "." + news.date.substr(0, 4)

      const tags =
        news.tags === null
          ? null
          : news.tags.split(", ").map((tag, idx) => (
              <NewsMore key={idx} to={"/news/" + news.id} page={"/news/" + news.id}>
                {tag}
              </NewsMore>
            ))

      if (tags !== null) {
        for (let i = 0; i < tags.length - 1; i += 2) {
          tags.splice(i + 1, 0, ", ")
        }
      }

      return (
        <News key={news.id}>
          <NewsPreview src={news.preview} />
          <Link to={"/news/" + news.id} page={"/news/" + news.id}>
            <NewsMask>
              <NewsTitle>{news.title}</NewsTitle>
            </NewsMask>
          </Link>
          <NewsDescription>
            {description}
            <NewsLink to={"/news/" + news.id} page={"/news/" + news.id}>
              Открыть новость
            </NewsLink>
          </NewsDescription>
          {tags !== null ? <NewsInfoDiv position={"left"}>Тэги: {tags}</NewsInfoDiv> : ""}
          <NewsInfoDiv position={"right"}>
            Дата: <NewsMore to={""}>{date}</NewsMore>
          </NewsInfoDiv>
        </News>
      )
    })

    const content = isFetching ? (
      <NewsNotFound>Загрузка...</NewsNotFound>
    ) : news.length > 0 ? (
      NewsArray
    ) : (
      <NewsNotFound>По данному запросу новости не найдены.</NewsNotFound>
    )

    return content
  }
}
