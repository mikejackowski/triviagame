import he from 'he';
import React from 'react';
import * as Styled from './Question.styled';

type IProps = {
  question: string;
};

const QuestionComponent: React.SFC<IProps> = props => {

  return (
    <Styled.QuestionWrapper>
      {he.decode(props.question)}
    </Styled.QuestionWrapper>
  );
};

QuestionComponent.defaultProps = {
  question: '',
};

export default QuestionComponent;
