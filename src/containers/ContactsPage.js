import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Header from "../components/Header"
import * as Actions from "../actions"
import { Link, browserHistory } from "react-router"

const ContactsPage = ({ actions, activePage }) => (
  <div>
    {/* <Header changeActivePage={actions.changeActivePage} activePage={activePage} /> */}
    Contacts Page
  </div>
)

ContactsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  activePage: state.header.activePage,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage)
