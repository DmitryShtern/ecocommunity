import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { fetchArticle } from "../managers/requests"
import { ARTICLE_GET, setArticle } from "../actions"

const getArticle = function*({ payload }) {
  try {
    const article = yield call(fetchArticle, payload)
    yield put(setArticle(article[0]))
  } catch (e) {
    console.log(e)
    yield put(setArticle(null))
    alert("Ошибка загрузки статьи")
  }
}

export const watchArticle = function*() {
  yield takeLatest(ARTICLE_GET, getArticle)
}
