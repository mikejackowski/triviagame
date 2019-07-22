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

export interface SetLenght {
  type: '@game/SetLenght';
  gameLenght: GameLenght;
}

export interface SetType {
  type: '@game/SetType';
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

export interface SetHighScore {
  highScore: number;
  type: 'game/SetHighScore';
}

export type GameAction =
  StartGame
  | FinishGame
  | GameStartRequested
  | GameStartCompleted
  | SetDifficulty
  | SetLenght
  | SetType
  | SetPlayerName
  | AddPoint
  | SetNewGame
  | SetHighScore;
