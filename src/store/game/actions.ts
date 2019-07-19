import { Dispatch } from 'react';
import * as actionTypes from './actionTypes';
import { Difficulty, GameLenght, GameState, QuestionsType } from './state';

const gameStartRequested = (): actionTypes.GameStartRequested => ({
  type: '@game/GameStartRequested'
});

const gameStart = (): actionTypes.StartGame => ({
  type: '@game/StartGame'
});

export const setQuestionsType = (questionsType: QuestionsType): actionTypes.SetQuestionsType => ({
  questionsType,
  type: '@game/SetQuestionsType',
});

export const setDifficulty = (difficulty: Difficulty): actionTypes.SetDifficulty => ({
  difficulty,
  type: '@game/SetDifficulty',
});

export const setGameLenght = (gameLenght: GameLenght): actionTypes.SetGameLenght => ({
  gameLenght,
  type: '@game/SetGameLenght',
});

export const setPlayerName = (playerName: string): actionTypes.SetPlayerName => ({
  playerName,
  type: '@game/SetPlayerName',
});

export const setGameScore = (score: number): actionTypes.SetGameScore => ({
  score,
  type: '@game/SetGameScore',
});

export const startGame = () => {
  return async (dispatch: Dispatch<actionTypes.GameAction>, getState: () => GameState) => { // tu moglby byc rootstate
    dispatch(gameStartRequested());
    console.log('zaciagam pytania');
    dispatch(gameStart());
  };
};
