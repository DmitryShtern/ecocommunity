import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import { Router, Route, IndexRoute, BrowserRouter } from "react-router-dom"
import { App, MainPage, NewsPage, ContactsPage, AboutPage } from "./containers"
// import { syncHistoryWithStore } from "react-router-redux"

const store = configureStore()
// const history = syncHistoryWithStore(BrowserRouter, store)

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
)
