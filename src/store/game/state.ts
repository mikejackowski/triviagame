export enum Difficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard'
}

export enum QuestionsType {
  SINGLE = 'boolean',
  MULTI = 'multiple',
  MIX = 'mixed'
}

export enum GameLenght {
  SHORT = 5,
  AVERAGE = 10,
  LONG = 15
}

export interface GameState {
  isLoading: boolean;
  gameInProgress: boolean;
  playerName: string;
  difficulty: Difficulty;
  gameLenght: GameLenght;
  score: number;
  questionsType: QuestionsType;
}

export const initialState: GameState = {
  difficulty: Difficulty.EASY,
  gameInProgress: false,
  gameLenght: GameLenght.SHORT,
  isLoading: false,
  playerName: '',
  questionsType: QuestionsType.SINGLE,
  score: 0,
};
