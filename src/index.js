import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store/configureStore"
import App from "./containers/App"

import { syncHistoryWithStore } from "react-router-redux"

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
