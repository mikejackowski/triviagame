import React from 'react';
import * as Styled from './Layout.styled';

import { connect } from 'react-redux';
import { RootState } from '../../store/rootState';
import Game from '../Game/Game.component';
import Header from '../Header/Header.component';
import Menu from '../Menu/Menu.component';
import SummaryComponent from '../Summary/Summary.component';

type IProps = {
  gameInProgress: boolean,
  gameFinished: boolean,
  isLoading: boolean,
};

const Layout: React.SFC<IProps> = props => {

  if (props.gameInProgress) {
    return (
      <Styled.LayoutWrapper>
        <Styled.Wrapper>
          <Header/>
          <Game />
        </Styled.Wrapper>
      </Styled.LayoutWrapper>
    );
  }

  if (!props.gameInProgress && props.gameFinished) {
    return (
      <Styled.LayoutWrapper>
        <Styled.Wrapper>
          <Header/>
          <SummaryComponent/>
        </Styled.Wrapper>
      </Styled.LayoutWrapper>
    );
  }

  return (
    <Styled.LayoutWrapper>
      <Styled.Wrapper>
        <Header/>
        <Menu/>
      </Styled.Wrapper>
    </Styled.LayoutWrapper>
  );
};

const mapStateToProps = (state: RootState): IProps => ({
  gameFinished: state.game.gameFinished,
  gameInProgress: state.game.gameInProgress,
  isLoading: state.questions.isLoading,
});

export default connect(mapStateToProps, {})(Layout);
