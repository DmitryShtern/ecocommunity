import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MAIN, NEWS, CONTACTS, ABOUT } from "../constants/NavigationMenuLabels"

export default class Header extends Component {
  static propTypes = {
    changeActivePage: PropTypes.func.isRequired,
    activePage: PropTypes.string.isRequired,
  }

  handleChangeActivePage = activePage => {
    this.props.changeActivePage(activePage)
  }

  render() {
    const getBGColor = props => (props.page === this.props.activePage ? "#4CAF50" : "#333")
    const getHoverBGColor = props => (props.page === this.props.activePage ? "#4CAF50" : "#111")

    const NavUl = styled.ul`
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    `

    const NavLi = styled.li`
      float: ${props => props.float || "left"};
    `

    const NavA = styled.a`
      font-weight: bold;
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      background-color: ${getBGColor};

      :hover {
        background-color: ${getHoverBGColor};
      }
    `

    return (
      <header className="header">
        <NavUl>
          <NavLi>
            <NavA page={MAIN} href="#home" onClick={() => this.handleChangeActivePage(MAIN)}>
              Home
            </NavA>
          </NavLi>
          <NavLi>
            <NavA page={NEWS} href="#news" onClick={() => this.handleChangeActivePage(NEWS)}>
              News
            </NavA>
          </NavLi>
          <NavLi>
            <NavA
              page={CONTACTS}
              href="#contacts"
              onClick={() => this.handleChangeActivePage(CONTACTS)}
            >
              Contacts
            </NavA>
          </NavLi>
          <NavLi float="right">
            <NavA page={ABOUT} href="#about" onClick={() => this.handleChangeActivePage(ABOUT)}>
              About
            </NavA>
          </NavLi>
        </NavUl>
      </header>
    )
  }
}
