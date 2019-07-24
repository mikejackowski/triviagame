import React, { ReactNode } from 'react';
import * as Styled from './Button.styled';

type IProps = {
  children?: ReactNode;
  disabled?: boolean;
  buttonHandler: () => void;
  isActionButton?: boolean;
};

const Button: React.SFC<IProps> = props => {

  if (props.isActionButton) {
    return (
      <Styled.ActionButton
        disabled={props.disabled}
        onClick={props.buttonHandler}
      >
        {props.children}
      </Styled.ActionButton>
    );
  }

  return (
    <Styled.Button
      disabled={props.disabled}
      onClick={props.buttonHandler}
    >
      {props.children}
    </Styled.Button>
  );
};

Button.defaultProps = {
  disabled: false
};

export default Button;
