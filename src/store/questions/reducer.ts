import * as actionTypes from './actionTypes';
import { initialState, QuestionsState } from './state';

const getQuestionsRequested = (state: QuestionsState): QuestionsState => ({
  ...state,
  isLoading: true,
});

const getQuestionsFailed = (state: QuestionsState): QuestionsState => ({
  ...state,
  isLoading: false,
  questionsLoadFailed: true,
});

const getQuestionsSuccess = (state: QuestionsState): QuestionsState => ({
  ...state,
  isLoading: false,
});

const setQuestionsArray = (state: QuestionsState, action: actionTypes.SetQuestionsArray): QuestionsState => ({
  ...state,
  currentQuestionId: 0,
  questionsArray: action.questionsArray
});

const changeCurrentQuestion = (state: QuestionsState, action: actionTypes.ChangeCurrentQuestion): QuestionsState => ({
  ...state,
  currentQuestionId: action.currentQuestionId
});

const answerQuestion = (state: QuestionsState, action: actionTypes.AnswerQuestion): QuestionsState => ({
  ...state,
  questionsArray: state.questionsArray.map(
    (question, i) => i === action.questionId ? { ...question, userAnswer: action.answer } : question
  )
});

const clearQuestionRequest = (state: QuestionsState): QuestionsState => ({
  ...state,
  questionsLoadFailed: false,
});

const questionReducer = (state = initialState, action: actionTypes.QuestionAction) => {
  switch (action.type) {
    case '@question/ClearQuestionRequest': return clearQuestionRequest(state);
    case '@question/AnswerQuestion': return answerQuestion(state, action);
    case '@question/GetQuestionsRequested': return getQuestionsRequested(state);
    case '@question/GetQuestionsFailed': return getQuestionsFailed(state);
    case '@question/GetQuestionsSuccess': return getQuestionsSuccess(state);
    case '@question/SetQuestionsArray': return setQuestionsArray(state, action);
    case '@question/ChangeCurrentQuestion': return changeCurrentQuestion(state, action);
    default: return state;
  }
};

export default questionReducer;
