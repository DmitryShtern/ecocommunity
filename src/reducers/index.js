import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import router from "./router"
import newsFeed from "./newsFeed"
import todos from "./todos"

const rootReducer = combineReducers({
  routing: routerReducer,
  router,
  newsFeed,
  todos,
})

export default rootReducer
