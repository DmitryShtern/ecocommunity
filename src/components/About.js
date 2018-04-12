import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export default class About extends Component {
  static propTypes = {}

  render() {
    const Content = styled.div`
      padding: 50px 10%;
      width: 80%;
      height: 500px;
      background-color: #f9f9e0;
      font-size: 1.5em;
    `

    return (
      <div>
        "About"
        <Content>
          Краснодарская краевая экологическая общественная организация "Экологическое содружество"
          осуществляет деятельность в сфере охраны окружающей среды на территории Белореченского
          района Краснодарского края.
        </Content>
      </div>
    )
  }
}
