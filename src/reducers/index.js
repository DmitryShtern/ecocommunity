import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import header from "./header"
import news from "./news"
import article from "./article"

const rootReducer = combineReducers({
  routing: routerReducer,
  header,
  news,
  article,
})

export default rootReducer
