import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as Actions from "../actions"
import { LastNewsSlider, About, Contacts } from "../components"

const MainPage = ({ actions, activePage }) => (
  <div>
    Main Page
    {/* <LastNewsSlider /> */}
    <About />
    <Contacts />
    <div />
  </div>
)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
