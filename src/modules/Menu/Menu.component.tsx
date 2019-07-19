import React, { Component } from 'react';
import { connect } from 'react-redux';
import { colorTheme } from '../Common/colorVariables';

import { ThunkDispatch } from 'redux-thunk';
import actions from '../../store/actions';
import { Difficulty, GameLenght, GameState, QuestionsType } from '../../store/game/state';
import { RootState } from '../../store/rootState';
import * as Styled from './Menu.styled';

type DispatchProps = {
  setDifficulty: (difficulty: Difficulty) => void;
  setGameLenght: (gameLenght: GameLenght) => void;
  setQuestionsType: (questionsType: QuestionsType) => void;
  setPlayerName: (playerName: string) => void;
  startGame: () => void;
};

type StateProps = {
  playerName: string,
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

  playerNameInputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      playerName: e.currentTarget.value
    });
  }

  difficultyHandler = (changeTo: 'Harder' | 'Easier') => {
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

  render() {
    const { playerName, difficulty, gameLenght, toBeatScore } = this.props;

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
              To beat: {toBeatScore}
            </Styled.PreviousHighScoreDiv>
          </Styled.InputWrapper>
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          {difficulty}
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          {gameLenght}
        </Styled.SettingWrapper>
        <Styled.SettingWrapper>
          button will go here
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
