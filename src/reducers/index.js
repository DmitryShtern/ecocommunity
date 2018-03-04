import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import router from "./router"
import todos from "./todos"

const rootReducer = combineReducers({
  routing: routerReducer,
  router,
  todos,
})

export default rootReducer
