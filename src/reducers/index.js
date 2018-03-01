import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import todos from "./todos"
import header from "./header"

const rootReducer = combineReducers({
  routing: routerReducer,
  header,
  todos,
})

export default rootReducer
