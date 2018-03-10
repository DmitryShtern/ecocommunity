import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export default class Contacts extends Component {
  static propTypes = {}

  render() {
    const Content = styled.div`
      padding: 50px 10%;
      width: 80%;
      height: 500px;
      background-color: #333;
      color: #fff;
      font-size: 1.5em;
    `

    return (
      <div>
        "Contacts"
        <Content>Контакты: shternsveta@mail.ru</Content>
      </div>
    )
  }
}
