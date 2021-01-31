import React, { Component } from "react";
import Filmes from "../filmes";

//import api from './api';

class Filmes_categoria extends Component {
  state = {
    filmes: [],
  };

  async componentDidMount() {
    await fetch(`/api/filmes/${this.props.params.categoria}`)
      .then((response) => response.json())

      .then((response) => this.setState({ filmes: response }), console.log);
  }

  render() {
    const { filmes } = this.state;

    return (
      <div>
        <h1>filmes</h1>

        {filmes.map((live) => (
          <div key={live.num}>
            <div className="container">
              <div>
                <a href={live.stream_id}>
                  <div className="background-da-live">
                    <img src={live.stream_icon} alt="imagem-da-live" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Filmes_categoria;
