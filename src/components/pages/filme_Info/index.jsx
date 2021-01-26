import React, {Component} from 'react';
import {link} from 'wouter'

class filme_info extends Component {

  state = {
    info: []

  }

  componentDidMount() {

    const pegarInfo = () => {
      
        fetch(`/api/filme/info/${this.props.params.id}`)
          .then(a => a.json())
          .then(a => this.setState({info: a}))
      
    }
    pegarInfo()
  }

  render() {
    return (
        <h2>{this.state.info}</h2>
    );
  }

}

export default filme_info;
