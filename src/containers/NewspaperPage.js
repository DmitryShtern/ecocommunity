import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Header from "../components/Header"
import * as Actions from "../actions"
import { Link, browserHistory } from "react-router"

const NewspaperPage = ({}) => <div>Newspaper Page</div>

NewspaperPage.propTypes = {}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NewspaperPage)
