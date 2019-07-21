import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/rootState';
import * as Styled from './Header.styled';

type IProps = {};
type IState = {};
type StateProps = {
  gameInProgress: boolean;
  currentQuestionId: number;
  gameLenght: number;
  gameFinished: boolean;
};

type Props = IProps & StateProps;

class Header extends Component<Props, IState> {

  render() {

    if (this.props.gameInProgress) {
      return (
        <Styled.Wrapper>
          {this.props.currentQuestionId + 1}/{this.props.gameLenght}
        </Styled.Wrapper>
      );
    }

    if (!this.props.gameInProgress && this.props.gameFinished) {
      return <Styled.Wrapper>summary</Styled.Wrapper>;
    }

    return <Styled.Wrapper>trivia</Styled.Wrapper>;

  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  currentQuestionId: state.questions.currentQuestionId,
  gameFinished: state.game.gameFinished,
  gameInProgress: state.game.gameInProgress,
  gameLenght: state.game.gameLenght,
});

export default connect(mapStateToProps, {})(Header);
