import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Header from "../components/Header"
import MainSection from "../components/MainSection"
import * as TodoActions from "../actions"

const App = ({ actions, activePage }) => (
  <div>
    <Header changeActivePage={actions.changeActivePage} activePage={activePage} />
    {/* <Header addTodo={actions.addTodo} /> */}
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
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
