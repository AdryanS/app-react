import React, {Component} from 'react';
//import api from './api';
import background from '../../../components/img/background.jpg';
import {Link} from 'wouter'
import Bodyy from './style'

import Header from '../../components/header/index'

class Series extends Component {

  state = {
    series: [],
    categorias: []
  }

  async componentDidMount() {
    //pegando os filme menózada
    const getFilmes = async () => {
      const response = await fetch("/api/series")
      const data = await response.json()

      
      
      await this.setState({series: data})
      console.log(this.state.series)
    }
    //pegando as series menózada
    const getCategorias = async() => {
      const response = await fetch("/api/series/categorias");
      const data = await response.json()
      
      await this.setState({categorias: data})
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
        .series
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
                      series</h2>
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

export default Series;