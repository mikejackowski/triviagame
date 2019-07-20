import axios from 'axios';
import { Dispatch } from 'react';
import { RootState } from '../rootState';
import * as actionTypes from './actionTypes';
import { Question } from './state';

const getQuestionsRequested = (): actionTypes.GetQuestionsRequested => ({
  type: '@question/GetQuestionsRequested'
});

const getQuestionsFailed = (): actionTypes.GetQuestionsFailed => ({
  type: '@question/GetQuestionsFailed'
});

const getQuestionsSuccess = (): actionTypes.GetQuestionsSuccess => ({
  type: '@question/GetQuestionsSuccess'
});

export const setQuestionsArray = (questionsArray: Question[]): actionTypes.SetQuestionsArray => ({
  questionsArray,
  type: '@question/SetQuestionsArray'
});

export const changeCurrentQuestion = (currentQuestionId: number): actionTypes.ChangeCurrentQuestion => ({
  currentQuestionId,
  type: '@question/ChangeCurrentQuestion'
});

export const getQuestsions = () => {
  return async (dispatch: Dispatch<actionTypes.QuestionAction>, getState: () => RootState) => {
    dispatch(getQuestionsRequested());
    const state = getState();
    try {
      const baseUrl = 'https://opentdb.com/api.php?';
      const difficulty = state.game.difficulty;
      const gameLenght = state.game.gameLenght;
      const questionsType = state.game.questionsType;
      const questionsUrl = baseUrl.concat(`amount=${gameLenght}&difficulty=${difficulty}&type=${questionsType}`);

      const questions = await axios.get(questionsUrl);
      if (questions.data.response_code !== 0) {
        dispatch(getQuestionsFailed());
      }

      const questionsArray: Question[] = [];
      questions.data.results.map((el: Question, index: number) => {
        questionsArray.push({
          category: el.category,
          correct_answer: el.correct_answer,
          difficulty: el.difficulty,
          id: index,
          incorrect_answers: el.incorrect_answers,
          question: el.question,
          type: el.type,
        });
      });

      dispatch(setQuestionsArray(questionsArray));
      dispatch(getQuestionsSuccess());
    } catch (err) {
      dispatch(getQuestionsFailed());
    }
  };
};
