import * as actionTypes from './actionTypes';
import { GameState, initialState } from './state';

const gameStartRequested = (state: GameState): GameState => ({
  ...state,
  isLoading: true,
});

const gameStartCompleted = (state: GameState): GameState => ({
  ...state,
  isLoading: false,
});

const startGame = (state: GameState): GameState => ({
  ...state,
  gameInProgress: true,
  score: 0,
});

const setGameLenght = (state: GameState, action: actionTypes.SetGameLenght): GameState => ({
  ...state,
  gameLenght: action.gameLenght
});

const setDifficulty = (state: GameState, action: actionTypes.SetDifficulty): GameState => ({
  ...state,
  difficulty: action.difficulty
});

const setQuestionsType = (state: GameState, action: actionTypes.SetQuestionsType): GameState => ({
  ...state,
  questionsType: action.questionsType
});

const setPlayerName = (state: GameState, action: actionTypes.SetPlayerName): GameState => ({
  ...state,
  playerName: action.playerName
});

const setGameScore = (state: GameState, action: actionTypes.SetGameScore): GameState => ({
  ...state,
  score: action.score
});

const gameReducer = (state = initialState, action: actionTypes.GameAction) => {
  switch (action.type) {
    case '@game/StartGame': return startGame(state);
    case '@game/GameStartRequested': return gameStartRequested(state);
    case '@game/GameStartCompleted': return gameStartCompleted(state);
    case '@game/SetGameLenght': return setGameLenght(state, action);
    case '@game/SetQuestionsType': return setQuestionsType(state, action);
    case '@game/SetDifficulty': return setDifficulty(state, action);
    case '@game/SetPlayerName': return setPlayerName(state, action);
    case '@game/SetGameScore': return setGameScore(state, action);
    default: return state;
  }
};

export default gameReducer;
