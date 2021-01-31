import React, {Component} from 'react';
//import api from './api';
import Slider from '../../slider/slider'
import background from '../../../components/img/background.jpg';
import {Link} from 'wouter'
import Bodyy from './style'

import Header from '../../components/header/index'

class Filmes extends Component {

  state = {
    filmes: [],
    categorias: []
  }

  async componentDidMount() {
    //pegando os filme menózada
    const getFilmes = async() => {
      await fetch("/api/filmes").then((response) => response.json()).then(response => this.setState({filmes: response}));
      console.log(this.state.filmes)
    }
    //pegando as series menózada
    const getCategorias = async() => {
      await fetch("/api/filmes/categorias").then((response) => response.json()).then(response => this.setState({categorias: response}));
      console.log(this.state.categorias)
    }
    //rodando as função jão
    const lal = async() => {
      await getFilmes();
      await getCategorias();
    }
    lal()
  }

  render() {

    const filtrado = (num) => {
      return this
        .state
        .filmes
        .filter(a => a.category_id === num.toString())
    }

    return (
      <Bodyy className="App">
        <div className="body">
          <img src={background} className="background" alt="Background"/>
          <Header />
          <div className="group_B">
            {this
              .state
              .categorias
              .map(categoria => (
                <div>
                  <Link className="ze" to={`/filmes/${categoria.category_id}`}>
                    <h2>{categoria.category_name}
                      - {filtrado(categoria.category_id).length}
                      Filmes</h2>
                  </Link>
                  <Slider movies={filtrado(categoria.category_id)}/>
                </div>
              ))}
          </div>
        </div>
      </Bodyy>

    )
  }
}

export default Filmes;