import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { Header } from "../components"
import * as Actions from "../actions"
import { Link, browserHistory } from "react-router"

const ServicesPage = ({}) => <div>Services Page</div>

ServicesPage.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage)
