import { Difficulty, GameLenght, QuestionsType } from './state';
export interface GameStartRequested {
  type: '@game/GameStartRequested';
}

export interface GameStartCompleted {
  success: boolean;
  type: '@game/GameStartCompleted';
}

export interface StartGame {
  type: '@game/StartGame';
  gameInProgress: boolean;
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

export interface SetGameScore {
  type: '@game/SetGameScore';
  score: number;
}

export type GameAction =
  StartGame
  | GameStartRequested
  | GameStartCompleted
  | SetDifficulty
  | SetGameLenght
  | SetQuestionsType
  | SetPlayerName
  | SetGameScore;
