import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"

import Header from "../components/Header"
import MainPage from "./MainPage"
import NewsPage from "./NewsPage"
import ContactsPage from "./ContactsPage"
import AboutPage from "./AboutPage"
import * as Actions from "../actions"
import { Link, browserHistory } from "react-router"

const App = ({ actions, activePage }) => (
  <div>
    App
    <Header changeActivePage={actions.changeActivePage} activePage={activePage} />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/contacts" component={ContactsPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
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
