import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { default as rootSaga } from "../sagas"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import createHistory from "history/createBrowserHistory"
import rootReducer from "../reducers"
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux"

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()
export const history = createHistory()

const enhancers = []
const middleware = [thunk, sagaMiddleware, logger, routerMiddleware(history)]

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

export default function configureStore() {
  // const middleware = routerMiddleware(history)

  const store = createStore(rootReducer, composedEnhancers)

  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      // const nextRootReducer = require(rootReducer) // WARNiNG: 'Critical dependency: the request of a dependency is an expression' when require() has argument instead string
      const nextRootReducer = require("../reducers")
      store.replaceReducer(nextRootReducer)
    })
  }

  sagaMiddleware.run(rootSaga)

  return store
}
