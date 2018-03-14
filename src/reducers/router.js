import { CHANGE_ACTIVE_PAGE } from "../constants/ActionTypes"
import { NavMenuButtons } from "../constants/NavMenuButtons"

const initialState = {
  activePage: NavMenuButtons[0].link,
}

export default function navigationMenu(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_PAGE:
      return { activePage: action.activePage }
    default:
      return state
  }
}

// lib: redux-action (createAction(s))
