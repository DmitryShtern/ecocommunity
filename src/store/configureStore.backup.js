import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import rootReducer from "../reducers"

export default function configureStore(initialState) {
  const logger = createLogger()
  const store = createStore(rootReducer, initialState, applyMiddleware(logger))

  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      // const nextRootReducer = require(rootReducer) // WARNiNG: 'Critical dependency: the request of a dependency is an expression' when require() has argument instead string
      const nextRootReducer = require("../reducers")
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
