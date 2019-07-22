import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/rootState';
import * as Styled from './Header.styled';

type IProps = {};
type StateProps = {
  gameInProgress: boolean;
  currentQuestionId: number;
  gameLenght: number;
  gameFinished: boolean;
  questionsLoadFailed: boolean;
};

type Props = IProps & StateProps;

const Header: React.SFC<Props> = props => {

  if (props.questionsLoadFailed) {
    return (
      <Styled.Wrapper>error</Styled.Wrapper>
    );
  }

  if (props.gameInProgress) {
    return (
      <Styled.Wrapper>
        {props.currentQuestionId + 1}/{props.gameLenght}
      </Styled.Wrapper>
    );
  }

  if (!props.gameInProgress && props.gameFinished) {
    return <Styled.Wrapper>summary</Styled.Wrapper>;
  }

  return <Styled.Wrapper>trivia</Styled.Wrapper>;
};

const mapStateToProps = (state: RootState): StateProps => ({
  currentQuestionId: state.questions.currentQuestionId,
  gameFinished: state.game.gameFinished,
  gameInProgress: state.game.gameInProgress,
  gameLenght: state.game.gameLenght,
  questionsLoadFailed: state.questions.questionsLoadFailed,
});

export default connect(mapStateToProps, {})(Header);
