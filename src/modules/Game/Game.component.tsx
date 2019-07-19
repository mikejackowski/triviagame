import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/rootState';

type IProps = {};
type StateProps = {
  isLoading: boolean
};

type Props = IProps & StateProps;

class Game extends Component<Props> {

  render() {
    return (
      <div>this is game component</div>
    );

  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  isLoading: state.game.isLoading
});

export default connect(mapStateToProps, {})(Game);
