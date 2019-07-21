import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorTheme } from '../Common/colorVariables';

import { ThunkDispatch } from 'redux-thunk';
import actions from '../../store/actions';
import { Difficulty, GameLenght, QuestionsType } from '../../store/game/state';
import { RootState } from '../../store/rootState';
import Button from '../Common/Button/Button.component';
import * as Styled from './Menu.styled';

type DispatchProps = {
  setDifficulty: (difficulty: Difficulty) => void;
  setGameLenght: (gameLenght: GameLenght) => void;
  setQuestionsType: (questionsType: QuestionsType) => void;
  setPlayerName: (playerName: string) => void;
  startGame: () => void;
  getQuestions: () => void;
};

type StateProps = {
  playerName: string,
  difficulty: Difficulty,
  gameLenght: GameLenght,
  toBeatScore: number,
  questionsType: QuestionsType
};

type IState = {
};
type IProps = {};

type Props = DispatchProps & StateProps & IProps;

class Menu extends Component<Props, IState> {

  state: IState = {
    playerName: ''
  };

  playerNameInputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    this.props.setPlayerName(e.currentTarget.value);
  }

  difficultyHandler = (changeTo: 'Harder' | 'Easier') => () => {
    const difficulty = this.props.difficulty;

    if (changeTo === 'Harder') {
      if (difficulty === Difficulty.EASY) {
        return this.props.setDifficulty(Difficulty.MEDIUM);
      }
      if (difficulty === Difficulty.MEDIUM) {
        return this.props.setDifficulty(Difficulty.HARD);
      }
      return null;
    }

    if (difficulty === Difficulty.HARD) {
      return this.props.setDifficulty(Difficulty.MEDIUM);
    }
    if (difficulty === Difficulty.MEDIUM) {
      return this.props.setDifficulty(Difficulty.EASY);
    }
    return null;
  }

  gameLenghtHandler = (changeTo: 'Longer' | 'Shorter') => () => {
    const gameLenght = this.props.gameLenght;

    if (changeTo === 'Longer') {
      if (gameLenght === GameLenght.AVERAGE) {
        return this.props.setGameLenght(GameLenght.LONG);
      }
      if (gameLenght === GameLenght.SHORT) {
        return this.props.setGameLenght(GameLenght.AVERAGE);
      }
      return null;
    }
    if (gameLenght === GameLenght.LONG) {
      return this.props.setGameLenght(GameLenght.AVERAGE);
    }
    if (gameLenght === GameLenght.AVERAGE) {
      return this.props.setGameLenght(GameLenght.SHORT);
    }
    return null;
  }

  questionsTypeHandler = (changeTo: 'Simple' | 'Complex') => () => {

    if (changeTo === 'Complex') {
      return this.props.setQuestionsType(QuestionsType.MULTI);
    }
    return this.props.setQuestionsType(QuestionsType.SINGLE);

  }

  startGame = () => {
    this.props.getQuestions();
    this.props.setPlayerName(this.props.playerName);
    this.props.startGame();
  }

  render() {
    const { difficulty, playerName, gameLenght, questionsType, toBeatScore } = this.props;
    return (
      <Styled.MenuWrapper>
        <Styled.SettingWrapper>
          <Styled.InputWrapper>
            <Styled.PlayerNameInput
              theme={colorTheme}
              value={playerName}
              placeholder={'New player'}
              type={'text'}
              onChange={this.playerNameInputHandler}
            />
            <Styled.PreviousHighScoreDiv>
              To beat: {toBeatScore.toFixed(1)}%
            </Styled.PreviousHighScoreDiv>
          </Styled.InputWrapper>
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          <Styled.InputWithControlsWrapper>
            <Styled.GameSetting>
              {difficulty}
            </Styled.GameSetting>
            <Styled.DifficultyButtonWrapper>
              <Button
                onButtonClick={this.difficultyHandler('Harder')}
                disabled={this.props.difficulty === Difficulty.HARD}
              >
                +
              </Button>
              <Button
                onButtonClick={this.difficultyHandler('Easier')}
                disabled={this.props.difficulty === Difficulty.EASY}
              >
                -
              </Button>
            </Styled.DifficultyButtonWrapper>
          </Styled.InputWithControlsWrapper>
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          <Styled.InputWithControlsWrapper>
            <Styled.GameSetting>
              {questionsType}
            </Styled.GameSetting>
            <Styled.DifficultyButtonWrapper>
              <Button
                onButtonClick={this.questionsTypeHandler('Complex')}
                disabled={this.props.questionsType === QuestionsType.MULTI}
              >
                +
              </Button>
              <Button
                onButtonClick={this.questionsTypeHandler('Simple')}
                disabled={this.props.questionsType === QuestionsType.SINGLE}
              >
                -
              </Button>
            </Styled.DifficultyButtonWrapper>
          </Styled.InputWithControlsWrapper>
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          <Styled.InputWithControlsWrapper>
            <Styled.GameSetting>
              {gameLenght}
            </Styled.GameSetting>
            <Styled.DifficultyButtonWrapper>
              <Button
                onButtonClick={this.gameLenghtHandler('Longer')}
                disabled={this.props.gameLenght === GameLenght.LONG}
              >
                +
              </Button>
              <Button
                onButtonClick={this.gameLenghtHandler('Shorter')}
                disabled={this.props.gameLenght === GameLenght.SHORT}
              >
                -
              </Button>
            </Styled.DifficultyButtonWrapper>
          </Styled.InputWithControlsWrapper>
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          <Styled.InputWrapper>
            <Button
              action={true}
              onButtonClick={this.startGame}
              disabled={this.props.playerName.length ? false : true}
            >
              start
            </Button>
          </Styled.InputWrapper>
        </Styled.SettingWrapper>
      </Styled.MenuWrapper>
    );

  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  difficulty: state.game.difficulty,
  gameLenght: state.game.gameLenght,
  playerName: state.game.playerName,
  questionsType: state.game.questionsType,
  toBeatScore: state.game.highScore,
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  getQuestions: () => dispatch(actions.question.getQuestsions()),
  setDifficulty: (difficulty: Difficulty) => dispatch(actions.game.setDifficulty(difficulty)),
  setGameLenght: (gameLenght: GameLenght) => dispatch(actions.game.setGameLenght(gameLenght)),
  setPlayerName: (playerName: string) => dispatch(actions.game.setPlayerName(playerName)),
  setQuestionsType: (questionsType: QuestionsType) => dispatch(actions.game.setQuestionsType(questionsType)),
  startGame: () => dispatch(actions.game.startGame()),
});

export default connect<StateProps, DispatchProps, IProps, RootState>(mapStateToProps, mapDispatchToProps)(Menu);
