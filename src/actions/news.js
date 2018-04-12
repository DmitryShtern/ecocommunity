import { createAction } from "redux-actions"

// Action Types

export const NEWS_GET = "NEWS_GET"
export const NEWS_SET = "NEWS_SET"

// Action Creators

export const getNews = createAction(NEWS_GET)
export const setNews = createAction(NEWS_SET)
