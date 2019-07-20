import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import actions from '../../store/actions';
import { Question } from '../../store/questions/state';
import { RootState } from '../../store/rootState';
import Button from '../Common/Button/Button.component';
import Loader from '../Common/Loader/Loader';
import QuestionComponent from '../Question/Question.component';
import * as Styled from './Game.styled';

type DispatchProps = {
  getQuestions: () => void;
  addPoint: () => void;
  changeCurrentQuestion: (questionId: number) => void;
  finishGame: () => void;
};

type StateProps = {
  questionsArray: Question[];
  isLoading: boolean
  currentQuestionId: number;
};

type IState = {};
type IProps = {};

type Props = DispatchProps & StateProps & IProps;

class Game extends Component<Props, IState> {
  componentDidMount() {
    this.props.getQuestions();
  }

  answerQuestion = (answer: string) => () => {
    const correctAnswer = this.props.questionsArray[this.props.currentQuestionId].correct_answer;
    if (answer === correctAnswer) {
      this.props.addPoint();
    }
    if (this.props.questionsArray.length === this.props.currentQuestionId + 1) {
      this.props.finishGame();
    }
    this.props.changeCurrentQuestion(this.props.currentQuestionId + 1);
  }

  render() {
    const { questionsArray, currentQuestionId } = { ...this.props };

    if (this.props.questionsArray.length > 0) {
      let answersArr: string[] = [];
      const currentQuestion = questionsArray[currentQuestionId];
      answersArr = currentQuestion.incorrect_answers.concat(
        currentQuestion.correct_answer).sort((a, b) => 0.5 - Math.random()
      );
      return (
        <Styled.GameWrapper>
          <QuestionComponent question={currentQuestion.question}/>
          <Styled.AnswerButtonWrapper>
            {answersArr.map(answer => {
              return (
                <Button key={answer} onButtonClick={this.answerQuestion(answer)}>
                  {answer}
                </Button>
              );
            })}
          </Styled.AnswerButtonWrapper>
        </Styled.GameWrapper>
      );
    }

    return (
      <Styled.LoadingWrapper>
        <Loader/>
      </Styled.LoadingWrapper>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  currentQuestionId: state.questions.currentQuestionId,
  isLoading: state.questions.isLoading,
  questionsArray: state.questions.questionsArray,
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  addPoint: () => dispatch(actions.game.addPoint()),
  changeCurrentQuestion: (questionId: number) => dispatch(actions.question.changeCurrentQuestion(questionId)),
  finishGame: () => dispatch(actions.game.finishGame()),
  getQuestions: () => dispatch(actions.question.getQuestsions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
