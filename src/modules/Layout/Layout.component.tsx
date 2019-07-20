import React, { Component } from 'react';
import * as Styled from './Layout.styled';
// import { IProps, IState } from './Layout.types';

import { connect } from 'react-redux';
import { RootState } from '../../store/rootState';
import Game from '../Game/Game.component';
import Header from '../Header/Header.component';
import Menu from '../Menu/Menu.component';
import SummaryComponent from '../Summary/Summary.component';

type IProps = {
  gameInProgress: boolean,
  gameFinished: boolean
};
type IState = {};

class Layout extends Component<IProps, IState> {

  render() {

    if (this.props.gameInProgress) {
      return (
        <Styled.Wrapper>
          <Header/>
          <Game />
        </Styled.Wrapper>
      );
    }

    if (!this.props.gameInProgress && this.props.gameFinished) {
      return (
        <Styled.Wrapper>
          <Header/>
          <SummaryComponent/>
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

const mapStateToProps = (state: RootState): IProps => ({
  gameFinished: state.game.gameFinished,
  gameInProgress: state.game.gameInProgress,
});

export default connect(mapStateToProps, {})(Layout);
