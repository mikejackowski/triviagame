import React, { PureComponent } from 'react';
import * as Styled from './Layout.styled';
// import { IProps, IState } from './Layout.types';

import Game from '../Game/Game.component';
import Header from '../Header/Header.component';
import Menu from '../Menu/Menu.component';

type IProps = {
  isGamestarted: boolean,
};
type IState = {};

class Layout extends PureComponent<IProps, IState> {

  static defaultProps = {
    isGameStarted: false,
    isLoading: false,
  };

  render() {

    if (this.props.isGamestarted) {
      return (
        <Styled.Wrapper>
          <Header/>
          <Game />
        </Styled.Wrapper>
      );
    }

    return (
      <Styled.Wrapper>
        <Header/>
        <Menu/>
      </Styled.Wrapper>
    );
  }
}

export default Layout;
