import * as actionTypes from './actionTypes';
import { Difficulty, GameLenght, QuestionsType } from './state';

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
