import { Difficulty, GameLenght, QuestionsType } from './state';
export interface GameStartRequested {
  type: '@game/GameStartRequested';
}

export interface GameStartCompleted {
  success: boolean;
  type: '@game/GameStartCompleted';
} // TODO: check if this will be needed

export interface StartGame {
  type: '@game/StartGame';
}

export interface FinishGame {
  type: '@game/FinishGame';
}

export interface SetDifficulty {
  type: '@game/SetDifficulty';
  difficulty: Difficulty;
}

export interface SetGameLenght {
  type: '@game/SetGameLenght';
  gameLenght: GameLenght;
}

export interface SetQuestionsType {
  type: '@game/SetQuestionsType';
  questionsType: QuestionsType;
}

export interface SetPlayerName {
  type: '@game/SetPlayerName';
  playerName: string;
}

export interface AddPoint {
  type: '@game/AddPoint';
}

export interface SetNewGame {
  type: '@game/SetNewGame';
}

export type GameAction =
  StartGame
  | FinishGame
  | GameStartRequested
  | GameStartCompleted
  | SetDifficulty
  | SetGameLenght
  | SetQuestionsType
  | SetPlayerName
  | AddPoint
  | SetNewGame;
