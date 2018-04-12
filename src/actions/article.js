import { createAction } from "redux-actions"

// Action Types

export const ARTICLE_GET = "ARTICLE_GET"
export const ARTICLE_SET = "ARTICLE_SET"

// Action Creators

export const getArticle = createAction(ARTICLE_GET)
export const setArticle = createAction(ARTICLE_SET)
