export const OPEN_CALCULATOR = "OPEN_CALCULATOR"
export const CLOSE_CALCULATOR = "CLOSE_CALCULATOR"
export const CHANGE_CALC_VALUE_A = "CHANGE_CALC_VALUE_A"
export const CHANGE_CALC_VALUE_B = "CHANGE_CALC_VALUE_B"
export const CHANGE_CALC_VALUE_C = "CHANGE_CALC_VALUE_C"
export const CHANGE_VOLUME = "CHANGE_VOLUME"
export const CALC_VOLUME = "CALC_VOLUME"
export const CHANGE_STEP = "CHANGE_STEP"
export const CHANGE_ACTIVE_QUESTION = "CHANGE_ACTIVE_QUESTION"


const defaultState = {
  calcIsActiv: false,
  inputValue: 0,
  calcValueA: 0,
  calcValueB: 0,
  calcValueC: 0,
  volume: 0,
  step: 1,
  activeQuestion: -1,
}


export const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case OPEN_CALCULATOR:
      return { ...state, calcIsActiv: true }

    case CLOSE_CALCULATOR:
      return { ...state, calcIsActiv: false }

    case CHANGE_CALC_VALUE_A:
      return { ...state, calcValueA: action.value }

    case CHANGE_CALC_VALUE_B:
      return { ...state, calcValueB: action.value }

    case CHANGE_CALC_VALUE_C:
      return { ...state, calcValueC: action.value }

    case CHANGE_VOLUME:
      return { ...state, volume: action.value }

    case CALC_VOLUME:
      state.volume = state.calcValueA * state.calcValueB * state.calcValueC
      return { ...state }

    case CHANGE_STEP:
      return { ...state, step: action.step }

    case CHANGE_ACTIVE_QUESTION:
      return { ...state, activeQuestion: action.activeQuestion }

    default:
      return state
  }
}