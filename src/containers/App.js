import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Header from "../components/Header"
import MainPage from "./MainPage"
import * as Actions from "../actions"

const App = ({ actions, activePage }) => (
  <div>
    <Header changeActivePage={actions.changeActivePage} activePage={activePage} />
    {/* <MainSection todos={todos} actions={actions} /> */}
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  activePage: state.header.activePage,
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
