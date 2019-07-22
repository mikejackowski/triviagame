import { Dispatch } from 'react';
import { RootState } from '../rootState';
import * as actionTypes from './actionTypes';
import { Difficulty, GameLenght, QuestionsType } from './state';

export const setType = (questionsType: QuestionsType): actionTypes.SetType => ({
  questionsType,
  type: '@game/SetType',
});

export const setDifficulty = (difficulty: Difficulty): actionTypes.SetDifficulty => ({
  difficulty,
  type: '@game/SetDifficulty',
});

export const setLenght = (gameLenght: GameLenght): actionTypes.SetLenght => ({
  gameLenght,
  type: '@game/SetLenght',
});

export const setPlayerName = (playerName: string): actionTypes.SetPlayerName => ({
  playerName,
  type: '@game/SetPlayerName',
});

export const addPoint = (): actionTypes.AddPoint => ({
  type: '@game/AddPoint'
});

export const finishGame = (): actionTypes.FinishGame => ({
  type: '@game/FinishGame'
});

export const startGame = (): actionTypes.StartGame => ({
  type: '@game/StartGame'
});

export const setNewGame = (): actionTypes.SetNewGame => ({
  type: '@game/SetNewGame'
});

export const setHighScore = (highScore: number): actionTypes.SetHighScore => ({
  highScore,
  type: 'game/SetHighScore'
});

export const setGameDifficulty = (newDiff: 'Harder' | 'Easier') => {
  return async (dispatch: Dispatch<actionTypes.GameAction>, getState: () => RootState) => {
    const state = getState();

    const difficulty = state.game.difficulty;

    if (newDiff === 'Harder') {
      if (difficulty === Difficulty.EASY) {
        dispatch(setDifficulty(Difficulty.MEDIUM));
      }
      if (difficulty === Difficulty.MEDIUM) {
        dispatch(setDifficulty(Difficulty.HARD));
      }
      return null;
    }

    if (difficulty === Difficulty.HARD) {
      dispatch(setDifficulty(Difficulty.MEDIUM));
    }
    if (difficulty === Difficulty.MEDIUM) {
      dispatch(setDifficulty(Difficulty.EASY));
    }
    return null;
  };
};

export const setGameLenght = (newLenght: 'Longer' | 'Shorter') => {
  return async (dispatch: Dispatch<actionTypes.GameAction>, getState: () => RootState) => {
    const state = getState();

    const gameLenght = state.game.gameLenght;

    if (newLenght === 'Longer') {
      if (gameLenght === GameLenght.AVERAGE) {
        dispatch(setLenght(GameLenght.LONG));
      }
      if (gameLenght === GameLenght.SHORT) {
        dispatch(setLenght(GameLenght.AVERAGE));
      }
      return null;
    }
    if (gameLenght === GameLenght.LONG) {
      dispatch(setLenght(GameLenght.AVERAGE));
    }
    if (gameLenght === GameLenght.AVERAGE) {
      dispatch(setLenght(GameLenght.SHORT));
    }
    return null;
  };
};

export const setQuestionsType = (newType: 'Simple' | 'Complex') => {
  return async (dispatch: Dispatch<actionTypes.GameAction>) => {

    if (newType === 'Complex') {
      return dispatch(setType(QuestionsType.MULTI));
    }
    dispatch(setType(QuestionsType.SINGLE));
  };
};
