import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
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
    const getColor = (props, type) => {
      const isActivePage = props.page === this.props.activePage
      switch (type) {
        case "background":
          return isActivePage ? "#5bad5f" : "#444"
          break
        case ":hover":
          return isActivePage ? "#478e4a" : "#333"
          break
        case ":active":
          return isActivePage ? "#447746" : "#222"
          break
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

      :hover {
        background-color: ${props => getColor(props, ":hover")};
      }

      :active {
        background-color: ${props => getColor(props, ":active")};
      }
    `

    return (
      <header className="header">
        Header
        <NavUl>
          <NavLi>
            <NavLink to="/" page={MAIN} onClick={() => this.handleChangeActivePage(MAIN)}>
              Main
            </NavLink>
          </NavLi>

          <NavLi>
            <NavLink to="/news" page={NEWS} onClick={() => this.handleChangeActivePage(NEWS)}>
              News
            </NavLink>
          </NavLi>

          <NavLi>
            <NavLink
              to="/contacts"
              page={CONTACTS}
              onClick={() => this.handleChangeActivePage(CONTACTS)}
            >
              Contacts
            </NavLink>
          </NavLi>

          <NavLi float="right">
            <NavLink to="/about" page={ABOUT} onClick={() => this.handleChangeActivePage(ABOUT)}>
              About
            </NavLink>
          </NavLi>
        </NavUl>
      </header>
    )
  }
}
