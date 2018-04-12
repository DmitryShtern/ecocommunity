import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { fetchNews } from "../managers/requests"
import { NEWS_GET, setNews } from "../actions"

const getNews = function*({ payload }) {
  try {
    const news = yield call(fetchNews, payload)
    yield put(setNews(news))
  } catch (e) {
    console.log(e)
    yield put(setNews([]))
    alert("Ошибка загрузки новостей")
  }
}

export const watchNews = function*() {
  yield takeEvery(NEWS_GET, getNews)
}
