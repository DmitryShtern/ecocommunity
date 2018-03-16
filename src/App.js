import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
// import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"

import { Header } from "./components"
import { MainPage, NewsPage, ServicesPage, GalleryPage, NewspaperPage } from "./containers"
// import { changeActivePage } from "../actions"
import { Link, browserHistory } from "react-router"

const App = () => (
  <Provider store={this.props.store}>
    <Header />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/newspaper" component={NewspaperPage} />
    </Switch>
  </Provider>
)

export default App
