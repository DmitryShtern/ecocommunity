import { call, all } from "redux-saga/effects"
import { watchNews } from "./news"
import { watchArticle } from "./article"

const rootSaga = function*() {
  while (true) {
    yield all([call(watchNews), call(watchArticle)])
  }
}
export default rootSaga
