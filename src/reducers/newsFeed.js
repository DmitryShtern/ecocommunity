import { combineReducers } from "redux"
import { handleAction, handleActions } from "redux-actions"
import { NEWS_LOAD, ARTICLE_LOAD, loadNews, loadArticle } from "../actions"
import { News } from "../constants"
import NewsFeed from "../components"

// Reducers

// const news = handleAction(NEWS_LOAD, (_, action) => action.payload, [])
const news = handleAction(NEWS_LOAD, (_, action) => News, [])

// const article = handleAction(ARTICLE_LOAD, (_, action) => News[action.payload], "")

export default combineReducers({
  news,
  // article,
})

// Selectors

export const getNews = state => state.news
// export const getArticle = state => state.article

// const isFetching = handleActions(
//   {
//     [ARTICLE_LOAD]: () => true,
//     [SUCSESS]: () => false,
//     [FALL]: () => false,
//   },
//   false,
// )

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
