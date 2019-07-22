import he from 'he';
import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import actions from '../../store/actions';
import { Question } from '../../store/questions/state';
import { RootState } from '../../store/rootState';
import Button from '../common/Button/Button.component';
import * as Styled from './Summary.styled';
type DispatchProps = {
  setNewGame: () => void;
  setQuestionsArray: (array: Question[]) => void;
};

type StateProps = {
  score: number;
  questionsArray: Question[];
};

type IProps = {};

type Props = DispatchProps & StateProps & IProps;

const Summary: React.SFC<Props> = props => {
  const loadNewGame = () => {
    props.setQuestionsArray([]);
    props.setNewGame();
  };

  const { questionsArray } = { ...props };
  return (
    <Styled.SummaryWrapper>
        <Styled.QuestionsWrapper>
          {questionsArray.map(question => {
            if (question.userAnswer === question.correctAnswer) {
              return (
                <Styled.QuestionWrapper key={question.id}>
                  <Styled.Answer>{he.decode('&#9989;')}</Styled.Answer>
                  <Styled.Question>
                    {he.decode(question.question)}
                    <Styled.AnswerText>{he.decode(question.correctAnswer.toUpperCase())}</Styled.AnswerText>
                  </Styled.Question>
                </Styled.QuestionWrapper>
              );
            }
            return (
              <Styled.QuestionWrapper key={question.id}>
                <Styled.Answer>{he.decode('&#10060;')}</Styled.Answer>
                <Styled.Question>
                  {he.decode(question.question)}
                  <Styled.AnswerText>{he.decode(question.correctAnswer.toUpperCase())}</Styled.AnswerText>
                </Styled.Question>
              </Styled.QuestionWrapper>
            );
          })}
        </Styled.QuestionsWrapper>
      <Styled.ScoreWrapper>
        <Styled.ScoreDiv>
          <Styled.ScoreSpan>Your score was: </Styled.ScoreSpan>
          {((props.score / (props.questionsArray.length)) * 100).toFixed(1)}%
        </Styled.ScoreDiv>
      </Styled.ScoreWrapper>
      <Button isActionButton={true} buttonHandler={loadNewGame}>
        new game
      </Button>
    </Styled.SummaryWrapper>
  );
};

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
