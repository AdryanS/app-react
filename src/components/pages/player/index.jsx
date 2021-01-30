import React from 'react';
import Clappr from 'clappr';
import PropTypes from 'prop-types';

class Ze extends React.Component{
  propTypes= {
    source: Ze.PropTypes.string
  };

  shouldComponentUpdate(){ function a (nextProps, nextState) {
    let changed = (nextProps.source != this.props.source);
    this.props = nextProps;
    this.state = nextState;
    if (changed) {
      this.change(nextProps.source);
    }
    
    return false;
  }a()}

  componentDidMount(){ function b() {
    this.change(this.props.source);
  } b()}

  componentWillUnmount(){ function c() {
    this.destroyPlayer();
  } c()}
  
  destroyPlayer() {
    if (this.player) {
      this.player.destroy();
    }
    this.player = null;
  }

  change() { function d (source) {
    if (this.player) {
      this.destroyPlayer();
    }d()}var source
    this.player = new Clappr.Player({
      parent: this.refs.player,
      source: source,
      width: '100%',
      height: '100%',
      hlsjsConfig: {
        enableWorker: true
      }
    });
  }

  render(){
    return (
      <div>
        <div ref="player"></div>
      </div>
    );
  }
}
export default Ze