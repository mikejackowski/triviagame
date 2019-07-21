import he from 'he';
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
  answerQuestion: (questionId: number, answer: string) => void;
  setHighScore: (score: number) => void;
};

type StateProps = {
  questionsArray: Question[];
  isLoading: boolean
  currentQuestionId: number;
  score: number;
  highScore: number;
};

type IState = {};
type IProps = {};

type Props = DispatchProps & StateProps & IProps;

class Game extends Component<Props, IState> {

  answerQuestion = (questionId: number, answer: string) => () => {
    this.props.answerQuestion(questionId, answer);
    const correctAnswer = this.props.questionsArray[this.props.currentQuestionId].correctAnswer;
    if (answer === correctAnswer) {
      this.props.addPoint();
    }
    if (this.props.questionsArray.length === this.props.currentQuestionId + 1) {
      this.checkHighScore();
      this.props.finishGame();
    }
    this.props.changeCurrentQuestion(this.props.currentQuestionId + 1);
  }

  checkHighScore = () => {
    const score = ((this.props.score / (this.props.questionsArray.length)) * 100);
    if (score > this.props.highScore) {
      this.props.setHighScore(score);
    }
  }

  prepareAnswers = (currentQuestion: Question) => {
    return currentQuestion.incorrectAnswers.concat(
      currentQuestion.correctAnswer).sort((a, b) => 0.5 - Math.random()
    );
  }

  render() {
    const { questionsArray, currentQuestionId } = { ...this.props };
    if (this.props.questionsArray.length > 0 && !this.props.isLoading) {
      let answersArr: string[] = [];
      const currentQuestion = questionsArray[currentQuestionId];
      answersArr = this.prepareAnswers(currentQuestion);

      return (
        <Styled.GameWrapper>
          <QuestionComponent question={currentQuestion.question}/>
          <Styled.AnswerButtonWrapper>
            {answersArr.map(answer => {
              return (
                <Button action={true} key={answer} onButtonClick={this.answerQuestion(currentQuestionId, answer)}>
                  {he.decode(answer)}
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
  highScore: state.game.highScore,
  isLoading: state.questions.isLoading,
  questionsArray: state.questions.questionsArray,
  score: state.game.score,
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  addPoint: () => dispatch(actions.game.addPoint()),
  answerQuestion: (questionId: number, answer: string) => dispatch(actions.question.answerQuestion(questionId, answer)),
  changeCurrentQuestion: (questionId: number) => dispatch(actions.question.changeCurrentQuestion(questionId)),
  finishGame: () => dispatch(actions.game.finishGame()),
  getQuestions: () => dispatch(actions.question.getQuestsions()),
  setHighScore: (score: number) => dispatch(actions.game.setHighScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
