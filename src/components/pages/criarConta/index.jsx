import React, { Component } from "react";
import background from '../../../components/img/background.jpg';
import { Link } from "react-router-dom";
import Bodyy from './style';

class Criar extends Component {
    render() {
        return(
            <Bodyy>
                <div className="body">
                <img src={background} className="background" alt="Background"/>
                <div className="background-principal">
                    <h3 className="entrar">
                        Criar Conta
                    </h3>
                    <form>
                        <input type="email number" placeholder="Email ou numero de telefone"  className="email_or_number"/>
                        <br/>
                        <input 
                        type="password"
                        placeholder="Senha"
                        className="password1"
                        />
                        <input 
                        type="password"
                        placeholder="Senha"
                        className="password2"
                        />
                        <br/>
                        <Link className="link-1" to="/home">
                            <button className="button_entrar">
                                Entrar
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
            </Bodyy>
        )
    }
}

export default Criar;