import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
import { default as configureStore, history } from "./store/configureStore"
import { App } from "./containers"

const store = configureStore()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
)
