import React, { Component } from "react"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Switch, Route } from "react-router-dom"

import { Header } from "../components"
import { MainPage, NewsPage, ArticlePage, ServicesPage, GalleryPage, NewspaperPage } from "./"
// import { changeActivePage } from "../actions"
import { Link, browserHistory } from "react-router"

// const App = ({ changeActivePage, activePage }) => (
//   state = {users: []}

//   componentDidMount() {
//   fetch('/users')
//   .then(res => res.json())
//   .then(users => this.setState({ users }));
//   }

//   <div>
//     <Header changeActivePage={changeActivePage} activePage={activePage} />
//     <Switch>
//       <Route exact path="/" component={MainPage} />
//       <Route exact path="/news" component={NewsPage} />
//       <Route path="/news/:id" component={ArticlePage} />
//       <Route path="/services" component={ServicesPage} />
//       <Route path="/gallery" component={GalleryPage} />
//       <Route path="/newspaper" component={NewspaperPage} />
//     </Switch>
//   </div>
// )

class App extends Component {
  render() {
    const { activePage } = this.props

    return (
      <div>
        <Header activePage={activePage} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/news" component={NewsPage} />
          <Route path="/news/:id" component={ArticlePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/newspaper" component={NewspaperPage} />
        </Switch>
      </div>
    )
  }
}

App.propTypes = {
  activePage: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  activePage: state.routing.location.pathname,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
