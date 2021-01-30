import React, {Component} from 'react';
import {Link} from 'wouter';
import Bodyy from './style'
import background from '../../img/background.jpg'

class Error extends Component {

  render() {

    return (
      <Bodyy>
        <img src={background} className="backg" alt="Background"/>
        <div className="container">
          <h3 className="num">
            404
          </h3>
          <h4 className="mensagem">
            Alguma coisa não funcionou direito
          </h4>
          <Link to="/">
            <p className="voltar">
            voltar a tela inicial
            </p>
          </Link>
        </div>
      </Bodyy>

    )

  }

}
export default Error;