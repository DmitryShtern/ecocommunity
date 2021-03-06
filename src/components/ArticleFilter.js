import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SearchImage, SearchWhiteImage } from "../constants/images"
import { Tags } from "../constants"

export default class NewsArticleFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: Tags,
    }
  }

  static propTypes = {}

  render() {
    // const getProperies = type => {
    //   switch (type) {
    //   }
    // }

    const Filter = styled.div`
      margin: 3% 0;
      width: 20%;
      height: 400px;
      background-color: #f9f9e0;
      position: fixed;
      right: 5%;
      font-size: 1vw;
      font-family: Arial;
      text-align: center;
    `

    const Label = styled.label`
      top: 10px;
      font-size: 1.5vw;
      position: relative;
    `

    const FilterOptions = styled.div`
      margin: 50px 15%;
      width: 70%;
      height: 300px;
      background-color: #333;
      color: #fff;
      position: absolute;
    `

    const SearchDiv = styled.div`
      margin: 10% 5%;
      height: 20%;
      background-color: #f9f9e0;
      color: #000;
      position: relative;
    `

    const SearchInput = styled.input`
      width: 60%;
      height: 35px;
      padding: 0 10px;
      font-size: 0.9vw;
      font-weight: bold;
      color: #478e4a;
      position: relative;
      border: 2px solid #478e4a;
      border-radius: 5px;

      ::-webkit-input-placeholder {
        color: #478e4a;
        font-weight: bold;
      }
      ::-moz-placeholder {
        color: #478e4a;
        font-weight: bold;
      }
      :-moz-placeholder {
        color: #478e4a;
        font-weight: bold;
      }
      :-ms-input-placeholder {
        color: #478e4a;
        font-weight: bold;
      }
      :-o-input-placeholder {
        color: #478e4a;
        font-weight: bold;
      }
    `

    const SearchButton = styled.button`
      top: 10px;
      width: 35px;
      height: 35px;
      position: relative;
      border: 2px solid #478e4a;
      border-radius: 5px;
      background: #fff url(${SearchImage}) center no-repeat;
      background-size: 25px;

      :hover {
        background-color: #478e4a;
        background-image: url(${SearchWhiteImage});
      }

      :active {
        background-color: #5bad5f;
        background-image: url(${SearchWhiteImage});
      }
    `

    // const FilterDate = styled.input.attrs({
    //   type: "date",
    //   min: "2012-08-31",
    //   max: todayString,
    // })`
    //   color: #478e4a;
    // `

    const FilterTagsOption = styled.option``

    const FilterTags = this.state.tags.map(tag => {
      // if (news.title.length > 50) {
      //   news.title = news.title.slice(0, 50) + "..."
      // }
      // news.description =
      //   news.description.length > 400
      //     ? news.description.slice(0, 400) + "... "
      //     : news.description + " "
      // news.date =
      //   news.date.substr(8, 2) + "." + news.date.substr(5, 2) + "." + news.date.substr(0, 4)
      // news.tags = news.tags.map((tag, idx) => {
      //   return <NewsMore key={idx}>{tag} </NewsMore>
      // })

      return (
        <FilterTagsOption key={tag.id} value={tag.name}>
          {tag.name}
        </FilterTagsOption>
      )
    })

    return (
      <div>
        {/* "NewsFeed" */}
        <Filter>
          <FilterOptions>
            NewsArticleFilter
            {/* <Label>Отфильтровать:</Label> */}
            {/* <SearchDiv> 
              <SearchInput type={"text"} placeholder={"Поиск записи..."} /> 
              <SearchButton /> 
              <img 
                style={{ display: "inline" }} 
                src={"http://worldartsme.com/images/search-button-clipart-1.jpg"} 
                width={"30px"} 
                height={"30px"} 
              /> 
            </SearchDiv> 
            <SearchDiv> 
              По дате: 
              <br /> 
              С <FilterDate /> 
              <br /> 
              По <FilterDate /> 
            </SearchDiv> 
            <SearchDiv> 
              По тэгам: 
              <select multiple>{FilterTags}</select> 
            </SearchDiv> */}
          </FilterOptions>
        </Filter>
      </div>
    )
  }
}
