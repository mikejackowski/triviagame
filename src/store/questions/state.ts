import { Difficulty, QuestionsType } from '../game/state';

export type Question = {
  id: number;
  category: string;
  type: QuestionsType;
  difficulty: Difficulty;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  userAnswer: string;
};

export interface QuestionsState {
  questionsArray: Question[];
  currentQuestionId: number;
  isLoading: boolean;
}

export const initialState: QuestionsState = {
  currentQuestionId: 0,
  isLoading: false,
  questionsArray: [],
};
