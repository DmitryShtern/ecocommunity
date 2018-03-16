import { createAction } from "redux-actions"

// Action Types

export const NEWS_LOAD = "NEWS_LOAD"
export const ARTICLE_LOAD = "ARTICLE_LOAD"

// Action Creators

export const loadNews = createAction(NEWS_LOAD)
export const loadArticle = createAction(ARTICLE_LOAD)
