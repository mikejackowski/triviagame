import React from 'react';
import { connect } from 'react-redux';
import { colorTheme } from '../common/colorVariables';

import { ThunkDispatch } from 'redux-thunk';
import actions from '../../store/actions';
import { Difficulty, GameLenght, QuestionsType } from '../../store/game/state';
import { RootState } from '../../store/rootState';
import Button from '../common/Button/Button.component';
import * as Styled from './Menu.styled';

type DispatchProps = {
  difficultyHandler: (newDiff: 'Harder' | 'Easier') => () => void;
  gameLenghtHandler: (newLenght: 'Longer' | 'Shorter') => () => void;
  questionTypesHandler: (newType: 'Complex' | 'Simple') => () => void;
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

type IProps = {};

type Props = DispatchProps & StateProps & IProps;

const Menu: React.SFC<Props> = props => {
  // class Menu extends Component<Props, IState> {

  const playerNameInputHandler = (e: React.FormEvent<HTMLInputElement>): void => {
    props.setPlayerName(e.currentTarget.value);
  };

  const startGame = () => {
    props.getQuestions();
    props.setPlayerName(props.playerName);
    props.startGame();
  };

  const { difficulty, playerName, gameLenght, questionsType, toBeatScore } = props;
  return (
    <Styled.MenuWrapper>
      <Styled.SettingWrapper>
        <Styled.InputWrapper>
          <Styled.PlayerNameInput
            theme={colorTheme}
            value={playerName}
            placeholder={'New player'}
            type={'text'}
            onChange={playerNameInputHandler}
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
              buttonHandler={props.difficultyHandler('Harder')}
              disabled={props.difficulty === Difficulty.HARD}
            >
              +
            </Button>
            <Button
              buttonHandler={props.difficultyHandler('Easier')}
              disabled={props.difficulty === Difficulty.EASY}
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
              buttonHandler={props.questionTypesHandler('Complex')}
              disabled={props.questionsType === QuestionsType.MULTI}
            >
              +
            </Button>
            <Button
              buttonHandler={props.questionTypesHandler('Simple')}
              disabled={props.questionsType === QuestionsType.SINGLE}
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
              buttonHandler={props.gameLenghtHandler('Longer')}
              disabled={props.gameLenght === GameLenght.LONG}
            >
              +
            </Button>
            <Button
              buttonHandler={props.gameLenghtHandler('Shorter')}
              disabled={props.gameLenght === GameLenght.SHORT}
            >
              -
            </Button>
          </Styled.DifficultyButtonWrapper>
        </Styled.InputWithControlsWrapper>
      </Styled.SettingWrapper>
      <Styled.SettingWrapper>
        <Styled.InputWrapper>
          <Button
            isActionButton={true}
            buttonHandler={startGame}
            disabled={props.playerName.length ? false : true}
          >
            start
          </Button>
        </Styled.InputWrapper>
      </Styled.SettingWrapper>
    </Styled.MenuWrapper>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  difficulty: state.game.difficulty,
  gameLenght: state.game.gameLenght,
  playerName: state.game.playerName,
  questionsType: state.game.questionsType,
  toBeatScore: state.game.highScore,
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  difficultyHandler: (newDiff: 'Harder' | 'Easier') => () => dispatch(actions.game.setGameDifficulty(newDiff)),
  gameLenghtHandler: (newLenght: 'Longer' | 'Shorter') => () => dispatch(actions.game.setGameLenght(newLenght)),
  getQuestions: () => dispatch(actions.question.getQuestsions()),
  questionTypesHandler: (newType: 'Complex' | 'Simple') => () => dispatch(actions.game.setQuestionsType(newType)),
  setPlayerName: (playerName: string) => dispatch(actions.game.setPlayerName(playerName)),
  startGame: () => dispatch(actions.game.startGame()),
});

export default connect<StateProps, DispatchProps, IProps, RootState>(mapStateToProps, mapDispatchToProps)(Menu);
