import React, { Component, ReactNode } from 'react';
import * as Styled from './Button.styled';

type IProps = {
  children?: ReactNode;
  disabled?: boolean;
  onButtonClick: () => void;
};

class Button extends Component<IProps> {

  render() {
    return (
      <Styled.Button
        disabled={this.props.disabled}
        onClick={this.props.onButtonClick}
      >
        {this.props.children}
      </Styled.Button>
    );
  }
}

export default Button;
