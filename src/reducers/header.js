import { CHANGE_ACTIVE_PAGE } from "../constants/ActionTypes"
import { MAIN } from "../constants/NavigationMenuLabels"

const initialState = {
  activePage: MAIN,
}

export default function navigationMenu(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_PAGE:
      return { activePage: action.activePage }
    default:
      return state
  }
}
