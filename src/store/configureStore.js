import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import createHistory from "history/createBrowserHistory"
import rootReducer from "../reducers"
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux"

const logger = createLogger()
export const history = createHistory()

export default function configureStore() {
  // const middleware = routerMiddleware(history)

  const store = createStore(rootReducer, applyMiddleware(logger))

  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      // const nextRootReducer = require(rootReducer) // WARNiNG: 'Critical dependency: the request of a dependency is an expression' when require() has argument instead string
      const nextRootReducer = require("../reducers")
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
