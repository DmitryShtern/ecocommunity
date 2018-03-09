import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { Header } from "../components"
import * as Actions from "../actions"
import { Link, browserHistory } from "react-router"

const ServicesPage = ({ actions, activePage }) => <div>Services Page</div>

ServicesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  activePage: state.router.activePage,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage)
