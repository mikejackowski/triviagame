export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export enum QuestionsType {
  SINGLE = 'boolean',
  MULTI = 'multiple'
}

export enum GameLenght {
  SHORT = 5,
  AVERAGE = 10,
  LONG = 15
}

export interface GameState {
  isLoading: boolean;
  gameInProgress: boolean;
  gameFinished: boolean;
  playerName: string;
  difficulty: Difficulty;
  gameLenght: GameLenght;
  score: number;
  questionsType: QuestionsType;
}

export const initialState: GameState = {
  difficulty: Difficulty.EASY,
  gameFinished: false,
  gameInProgress: false,
  gameLenght: GameLenght.SHORT,
  isLoading: false,
  playerName: '',
  questionsType: QuestionsType.SINGLE,
  score: 0,
};
