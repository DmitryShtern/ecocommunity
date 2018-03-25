import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import header from "./header"
import newsFeed from "./newsFeed"

const rootReducer = combineReducers({
  routing: routerReducer,
  header,
  newsFeed,
})

export default rootReducer
