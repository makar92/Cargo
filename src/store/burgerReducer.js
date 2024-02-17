export const CHANGE_ISOPEN_BURGER_WINDOW = "CHANGE_ISOPEN_BURGER_WINDOW"


const defaultState = {
  burgerWindowIsOpen: false 
}


export const burgerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_ISOPEN_BURGER_WINDOW:
      if (state.burgerWindowIsOpen === false) 
        return { ...state, burgerWindowIsOpen: true}
      if (state.burgerWindowIsOpen === true) 
        return { ...state, burgerWindowIsOpen: false}
      break
    default:
      return state 
  }
}