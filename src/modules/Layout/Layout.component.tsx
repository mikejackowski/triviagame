import React from 'react';
import * as Styled from './Layout.styled';

import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import actions from '../../store/actions';
import { RootState } from '../../store/rootState';
import Button from '../common/Button/Button.component';
import Game from '../Game/Game.component';
import Header from '../Header/Header.component';
import Menu from '../Menu/Menu.component';
import SummaryComponent from '../Summary/Summary.component';

type IProps = {
  gameInProgress: boolean,
  gameFinished: boolean,
  isLoading: boolean,
  questionsLoadFailed: boolean,
};

type DispatchProps = {
  clearQuestionsRequest: () => void,
  quitGameLoad: () => void,
};

type Props = IProps & DispatchProps;

const Layout: React.SFC<Props> = props => {

  const backToMenu = () => {
    props.clearQuestionsRequest();
    props.quitGameLoad();
  };

  if (props.questionsLoadFailed) {
    return (
      <Styled.LayoutWrapper>
        <Styled.Wrapper>
          <Header/>
          <Styled.ErrorWrapper>
            <Styled.ErrorMsg>Unable to load questions</Styled.ErrorMsg>
            <Button isActionButton={true} buttonHandler={backToMenu}>Back to menu</Button>
          </Styled.ErrorWrapper>
        </Styled.Wrapper>
    </Styled.LayoutWrapper>
    );
  }

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
  questionsLoadFailed: state.questions.questionsLoadFailed,
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  clearQuestionsRequest: () => dispatch(actions.question.clearQuestionRequest()),
  quitGameLoad: () => dispatch(actions.game.quitGameLoad())
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
