import he from 'he';
import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import actions from '../../store/actions';
import { Question } from '../../store/questions/state';
import { RootState } from '../../store/rootState';
import Button from '../common/Button/Button.component';
import Loader from '../common/Loader/Loader';
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

type IProps = {};

type Props = DispatchProps & StateProps & IProps;

const Game: React.SFC<Props> = props => {

  const answerQuestion = (questionId: number, answer: string) => () => {
    props.answerQuestion(questionId, answer);
    const correctAnswer = props.questionsArray[props.currentQuestionId].correctAnswer;
    if (answer === correctAnswer) {
      props.addPoint();
    }
    if (props.questionsArray.length === props.currentQuestionId + 1) {
      checkHighScore();
      props.finishGame();
    }
    props.changeCurrentQuestion(props.currentQuestionId + 1);
  };

  const checkHighScore = () => {
    const score = ((props.score / (props.questionsArray.length)) * 100);
    if (score > props.highScore) {
      props.setHighScore(score);
    }
  };

  const prepareAnswers = (currentQuestion: Question) => {
    return currentQuestion.incorrectAnswers.concat(
      currentQuestion.correctAnswer).sort((a, b) => 0.5 - Math.random()
    );
  };

  const { questionsArray, currentQuestionId } = { ...props };
  if (props.questionsArray.length > 0 && !props.isLoading) {
    let answersArr: string[] = [];
    const currentQuestion = questionsArray[currentQuestionId];
    answersArr = prepareAnswers(currentQuestion);

    return (
      <Styled.GameWrapper>
        <Styled.CategoryWrapper>
          {currentQuestion.category}
        </Styled.CategoryWrapper>
        <QuestionComponent question={currentQuestion.question}/>
        <Styled.AnswerButtonWrapper>
          {answersArr.map(answer => {
            return (
              <Button
                isActionButton={true}
                key={answer}
                buttonHandler={answerQuestion(currentQuestionId, answer)}
              >
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
};

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
