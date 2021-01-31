import React, {Component} from 'react';
import {Link} from 'wouter';
import axios from 'axios'

import Background from '../../img/background.jpg'

import {Container} from './styled'

class filme_info extends Component {

  state = {
    info: [],
    movie_data: []

  }

  componentDidMount() {

    const pegarInfo = async() => {
      const params = this.props.params.id
      const response = await fetch(`/api/filme/info/${params}`)
      const data = await response.json()

      this.setState({info: data.info})
      this.setState({movie_data: data.movie_data})

      console.log(this.state.info)
    }
    pegarInfo()
  }

  render() {
    return (
      <Container>
        <div classname="bkg">
          <img src={this.state.info.backdrop_path}/>
        </div>
        <div className="glass">
          <div className="div-img-principal">
            <img src={this.state.info.movie_image} className="img-principal"/>
          </div>
          <div className="alinhamento">
            <div>
              <h1 className="nomeFilme">{this.state.info.name}</h1>
            </div>
            <div className="info">
              <h5>data do lançamento ({this.state.info.releasedate})</h5>
              <h5>genero {this.state.info.genre}</h5>
              <h5>duração {this.state.info.duration}</h5>
            </div>
            <div className="actors">
              <h3>atores do filme</h3>
              <h5>{this.state.info.actors}</h5>
            </div>
            <div className="historia">
              <h2>sinopse do filme</h2>
              <p>{this.state.info.description}</p>
            </div>
          </div>
          <Link className="botao" to={`/filme/play/${this.props.params.id}`}>
            <div className="cu"><h4 className="cu2">Assistir</h4></div>
          </Link>
        </div>
      </Container>
    );
  }

}

export default filme_info;
