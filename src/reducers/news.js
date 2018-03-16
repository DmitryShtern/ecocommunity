import { combineReducers } from "redux"
import { handleActions } from "redux-actions"
import { NEWS_LOAD, ARTICLE_LOAD, loadNews, loadArticle } from "../actions"
import { News } from "../constants"

const initialState = {
  news: [],
  article: null,
}

// Reducers

const newsActions = handleAction(
  loadNews,
  (state, action) => ({
    news: News,
  }),
  initialState,
)

const articleActions = handleAction(
  loadArticle,
  (state, action) => ({
    article: action.article,
  }),
  initialState,
)

// HandelActionS example:

// const reducer = handleActions({
//   [increment](state) {
//     return { counter: state.counter + 1 }
//   },
//   [decrement](state) {
//     return { counter: state.counter - 1 }
//   }
// }, defaultState);

// createActionS example

// const { increment, decrement } = createActions({
//   'INCREMENT': amount => ({ amount: 1 }),
//   'DECREMENT': amount => ({ amount: -1 })
// });

// const reducer = handleActions({
//   [increment](state, { payload: { amount } }) {
//     return { counter: state.counter + amount }
//   },
//   [decrement](state, { payload: { amount } }) {
//     return { counter: state.counter + amount }
//   }
// }, defaultState);

// Мой вариант по визитнице

// const newsActions = handleAction(
//   NEWS_LOAD,
//   (_, { payload }) => payload,
//   [],
//   // {
//   //   [NEWS_LOAD]: state => News,
//   // },
//   // initialState.news,
// )

// const articleActions = handleAction(
//   NEWS_ARTICLE_GET,
//   (_, { payload }) => payload,
//   null,
//   // {
//   //   [NEWS_LOAD]: state => News,
//   // },
//   // initialState.article,
// )

export default combineReducers({
  newsActions,
  articleActions,
})

// Selectors

export const getNews = state => state.news
export const getArticle = state => state.article

// const initialState = {
//   news: [],
//   article: null,
// }

// // Reducers

// export default handleActions(
//   {
//     [NEWS_LOAD]: (state, {payload}) => !state

//     // Other reducers
//     // ...
//     //
//   },
//   initialState,
// )

// export default function navigationMenu(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_ACTIVE_PAGE:
//       return { activePage: action.activePage }
//     default:
//       return state
//   }
// }

// // lib: redux-action (createAction(s))
