import { createAction } from "redux-actions"

// Action Types

export const NEWS_GET = "NEWS_GET"
export const ARTICLE_GET = "ARTICLE_GET"

// Action Creators

export const getNews = createAction(NEWS_GET)
export const getArticle = createAction(ARTICLE_GET)
