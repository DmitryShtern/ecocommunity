import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import { default as configureStore, history } from "./store/configureStore"
import { Router, BrowserRouter } from "react-router-dom"
import { App } from "./containers"
// import { syncHistoryWithStore } from "react-router-redux"

const store = configureStore()
// const history = syncHistoryWithStore(BrowserRouter, store)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
)
