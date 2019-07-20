import React, { ReactNode } from 'react';
import * as Styled from './Button.styled';

type IProps = {
  children?: ReactNode;
  disabled?: boolean;
  onButtonClick: () => void;
  action?: boolean;
};

const Button: React.SFC<IProps> = props => {

  if (props.action) {
    return (
      <Styled.ActionButton
        disabled={props.disabled}
        onClick={props.onButtonClick}
      >
        {props.children}
      </Styled.ActionButton>
    );
  }

  return (
    <Styled.Button
      disabled={props.disabled}
      onClick={props.onButtonClick}
    >
      {props.children}
    </Styled.Button>
  );
};

Button.defaultProps = {
  disabled: false
};

export default Button;
