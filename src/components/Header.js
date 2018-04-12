import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { NavMenuButtons } from "../constants/NavMenuButtons"

export default class Header extends Component {
  static propTypes = {
    // changeActivePage: PropTypes.func.isRequired,
    activePage: PropTypes.string.isRequired,
  }

  // handleChangeActivePage = activePage => {
  //   this.props.changeActivePage(activePage)
  // }

  render() {
    // STYLED CONTAINER //

    const getColor = (props, type) => {
      const isActivePage = props.page.indexOf(this.props.activePage) !== -1

      console.log("this.props.activePage: " + this.props.activePage)
      console.log("props.page: " + props.page)

      switch (type) {
        case "background":
          return isActivePage ? "#5bad5f" : "#444"
        case ":hover":
          return isActivePage ? "#478e4a" : "#333"
        case ":active":
          return isActivePage ? "#447746" : "#222"
        default:
          return "#fff"
      }
    }

    const NavUl = styled.ul`
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #444;
    `

    const NavLi = styled.li`
      float: ${props => props.float || "left"};
    `

    const NavLink = styled(Link)`
      font-weight: bold;
      color: white;
      display: block;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      background-color: ${props => getColor(props, "background")};
      cursos: pointer;

      :hover {
        background-color: ${props => getColor(props, ":hover")};
      }

      :active {
        background-color: ${props => getColor(props, ":active")};
      }
    `

    // NAVIGATION MENU GENERATION //

    const NavMenu = NavMenuButtons.map((button, idx) => (
      <NavLi key={idx} float={button.float}>
        <NavLink
          to={button.link}
          page={button.link}
          // onClick={() => this.handleChangeActivePage(button.link)}
        >
          {button.label}
        </NavLink>
      </NavLi>
    ))

    return (
      <header className="header">
        {/* Header */}
        <NavUl>{NavMenu}</NavUl>
      </header>
    )
  }
}
