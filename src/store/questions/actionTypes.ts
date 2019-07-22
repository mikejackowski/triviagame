import { Question } from './state';

export interface GetQuestionsRequested {
  type: '@question/GetQuestionsRequested';
}

export interface GetQuestionsFailed {
  type: '@question/GetQuestionsFailed';
}

export interface GetQuestionsSuccess {
  type: '@question/GetQuestionsSuccess';
}

export interface ChangeCurrentQuestion {
  currentQuestionId: number;
  type: '@question/ChangeCurrentQuestion';
}

export interface SetQuestionsArray {
  questionsArray: Question[];
  type: '@question/SetQuestionsArray';
}

export interface AnswerQuestion {
  answer: string;
  questionId: number;
  type: '@question/AnswerQuestion';
}

export interface ClearQuestionRequest {
  type: '@question/ClearQuestionRequest';
}

export type QuestionAction =
  GetQuestionsRequested
  | AnswerQuestion
  | SetQuestionsArray
  | ChangeCurrentQuestion
  | GetQuestionsFailed
  | GetQuestionsSuccess
  | ClearQuestionRequest;
