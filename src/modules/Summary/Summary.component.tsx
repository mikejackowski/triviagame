import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import actions from '../../store/actions';
import { Question } from '../../store/questions/state';
import { RootState } from '../../store/rootState';
import Button from '../Common/Button/Button.component';
import * as Styled from './Summary.styled';

type DispatchProps = {
  setNewGame: () => void;
  setQuestionsArray: (array: Question[]) => void;
};

type StateProps = {
  score: number;
  questionsArray: Question[];
};

type IState = {};
type IProps = {};

type Props = DispatchProps & StateProps & IProps;

class Summary extends Component<Props, IState> {
  loadNewGame = () => {
    this.props.setQuestionsArray([]);
    this.props.setNewGame();
  }

  render() {
    return (
      <Styled.SummaryWrapper>
        <Styled.ScoreWrapper>
          Your score was:
          <Styled.ScoreDiv>
            {((this.props.score / (this.props.questionsArray.length + 1)) * 100).toFixed(1)}%
          </Styled.ScoreDiv>
        </Styled.ScoreWrapper>
        <Button action={true} onButtonClick={this.loadNewGame}>
          Start new game
        </Button>
      </Styled.SummaryWrapper>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  questionsArray: state.questions.questionsArray,
  score: state.game.score,
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  setNewGame: () => dispatch(actions.game.setNewGame()),
  setQuestionsArray: array => dispatch(actions.question.setQuestionsArray(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);

// export default connect<StateProps, DispatchProps, IProps, RootState>(mapStateToProps, mapDispatchToProps)(Menu);
