import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from '@redux-devtools/extension';
import { questionsReducer } from "./questionsReducer";
import { burgerReducer } from "./burgerReducer";



const rootReducer = combineReducers({
  reducer: reducer,
  questions: questionsReducer,
  burger: burgerReducer,
})


export const store = createStore(rootReducer, composeWithDevTools())



