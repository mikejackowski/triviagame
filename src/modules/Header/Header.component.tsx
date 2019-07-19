import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { GameState } from '../../store/game/state';
// import { RootState } from '../../store/rootState';
import * as Styled from './Header.styled';

type IProps = {};
type IState = {};
type StateProps = {
  gameInProgress: boolean
};

type DispatchProps = {};

type Props = IProps & StateProps;

class Header extends PureComponent<Props, IState> {

  render() {

    if (this.props.gameInProgress) {
      return (
        <Styled.Wrapper>
          1/10
        </Styled.Wrapper>
      );
    }

    return (
      <Styled.Wrapper>
        <Styled.GameName>
          TRIVIA
        </Styled.GameName>
      </Styled.Wrapper>
    );

  }
}

const mapStateToProps = (state: GameState): StateProps => ({
  // gameInProgress: state.game.gameInProgress
  gameInProgress: state.gameInProgress
});

// export default connect<StateProps, DispatchProps, IProps, RootState>(mapStateToProps)(Header);
// export default connect<StateProps, DispatchProps, IProps, RootState>(mapStateToProps)(Header);
// export default connect<StateProps, DispatchProps, IProps, RootState>(mapStateToProps)(Header);
export default connect(mapStateToProps, {})(Header);
