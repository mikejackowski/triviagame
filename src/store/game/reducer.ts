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
  gameFinished: false,
  gameInProgress: true,
  score: 0,
});

const finishGame = (state: GameState): GameState => ({
  ...state,
  gameFinished: true,
  gameInProgress: false,
});

const setGameLenght = (state: GameState, action: actionTypes.SetLenght): GameState => ({
  ...state,
  gameLenght: action.gameLenght
});

const setDifficulty = (state: GameState, action: actionTypes.SetDifficulty): GameState => ({
  ...state,
  difficulty: action.difficulty
});

const setQuestionsType = (state: GameState, action: actionTypes.SetType): GameState => ({
  ...state,
  questionsType: action.questionsType
});

const setPlayerName = (state: GameState, action: actionTypes.SetPlayerName): GameState => ({
  ...state,
  playerName: action.playerName
});

const addPoint = (state: GameState): GameState => ({
  ...state,
  score: state.score + 1
});

const setNewGame = (state: GameState): GameState => ({
  ...state,
  gameFinished: false,
  gameInProgress: false,
  score: 0,
});

const setHighScore = (state: GameState, action: actionTypes.SetHighScore): GameState => ({
  ...state,
  highScore: action.highScore,
});

const quitGameLoad = (state: GameState): GameState => ({
  ...state,
  gameInProgress: false,
});

const gameReducer = (state = initialState, action: actionTypes.GameAction) => {
  switch (action.type) {
    case '@game/QuitGameLoad': return quitGameLoad(state);
    case '@game/SetHighScore': return setHighScore(state, action);
    case '@game/SetNewGame': return setNewGame(state);
    case '@game/StartGame': return startGame(state);
    case '@game/FinishGame': return finishGame(state);
    case '@game/GameStartRequested': return gameStartRequested(state);
    case '@game/GameStartCompleted': return gameStartCompleted(state);
    case '@game/SetLenght': return setGameLenght(state, action);
    case '@game/SetType': return setQuestionsType(state, action);
    case '@game/SetDifficulty': return setDifficulty(state, action);
    case '@game/SetPlayerName': return setPlayerName(state, action);
    case '@game/AddPoint': return addPoint(state);
    default: return state;
  }
};

export default gameReducer;
