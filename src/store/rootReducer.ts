import { combineReducers } from 'redux';
import game from './game/reducer';
import questions from './questions/reducer';

const rootReducer = combineReducers({
  game,
  questions
});

export default rootReducer;
