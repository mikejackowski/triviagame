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
};

type StateProps = {
  difficulty: Difficulty,
  gameLenght: GameLenght,
  toBeatScore: number,
  questionsType: QuestionsType
};

type IState = {
  playerName: string;
};
type IProps = {};

type Props = DispatchProps & StateProps & IProps;

class Menu extends Component<Props, IState> {

  state: IState = {
    playerName: ''
  };

  playerNameInputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      playerName: e.currentTarget.value
    });
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

  startGame = () => {
    this.props.setPlayerName(this.state.playerName);
    this.props.startGame();
  }

  render() {
    const { difficulty, gameLenght, toBeatScore } = this.props;
    const { playerName } = this.state;
    return (
      <Styled.MenuWrapper>
        <Styled.PlayerNameWrapper>
          <Styled.InputWrapper>
            <Styled.PlayerNameInput
              theme={colorTheme}
              value={playerName}
              placeholder={'New player'}
              type={'text'}
              onChange={this.playerNameInputHandler}
            />
            <Styled.PreviousHighScoreDiv>
              To beat: {toBeatScore}
            </Styled.PreviousHighScoreDiv>
          </Styled.InputWrapper>
        </Styled.PlayerNameWrapper>
        <Styled.SettingWrapper>
          <Styled.DifficultyWrapper>
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
          </Styled.DifficultyWrapper>
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          <Styled.DifficultyWrapper>
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
                onButtonClick={() => this.gameLenghtHandler('Shorter')}
                disabled={this.props.gameLenght === GameLenght.SHORT}
              >
                -
              </Button>
            </Styled.DifficultyButtonWrapper>
          </Styled.DifficultyWrapper>
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          <Styled.StartGameButtonWrapper>
            <Button
              onButtonClick={this.startGame}
              disabled={this.state.playerName.length ? false : true}
            >
              start game
            </Button>
          </Styled.StartGameButtonWrapper>
        </Styled.SettingWrapper>
      </Styled.MenuWrapper>
    );

  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  difficulty: state.game.difficulty,
  gameLenght: state.game.gameLenght,
  questionsType: state.game.questionsType,
  toBeatScore: 1,
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  setDifficulty: (difficulty: Difficulty) => dispatch(actions.game.setDifficulty(difficulty)),
  setGameLenght: (gameLenght: GameLenght) => dispatch(actions.game.setGameLenght(gameLenght)),
  setPlayerName: (playerName: string) => dispatch(actions.game.setPlayerName(playerName)),
  setQuestionsType: (questionsType: QuestionsType) => dispatch(actions.game.setQuestionsType(questionsType)),
  startGame: () => dispatch(actions.game.startGame()),
});

export default connect<StateProps, DispatchProps, IProps, RootState>(mapStateToProps, mapDispatchToProps)(Menu);
