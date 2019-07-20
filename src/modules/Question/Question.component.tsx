import React from 'react';
import * as Styled from './Question.styled';

type IProps = {
  question: string;
};

const QuestionComponent: React.SFC<IProps> = props => {

  return (
    <Styled.QuestionWrapper>
      {props.question}
    </Styled.QuestionWrapper>
  );
};

QuestionComponent.defaultProps = {
  question: '',
};

export default QuestionComponent;
