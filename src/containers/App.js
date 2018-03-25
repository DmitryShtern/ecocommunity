import React from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"

import { Header } from "../components"
import { MainPage, NewsPage, ServicesPage, GalleryPage, NewspaperPage } from "./"
import { changeActivePage } from "../actions"
import { Link, browserHistory } from "react-router"

const App = ({ changeActivePage, activePage }) => (
  <div>
    <Header changeActivePage={changeActivePage} activePage={activePage} />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/newspaper" component={NewspaperPage} />
    </Switch>
  </div>
)

App.propTypes = {
  activePage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  activePage: state.header.activePage,
})

const mapDispatchToProps = {
  changeActivePage,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
