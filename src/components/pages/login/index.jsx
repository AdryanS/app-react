import React, { Component } from "react";
import { Link } from "react-router-dom";
import background from '../../../components/img/background.jpg';
import Bodyy from './style';

class Login extends Component {
    render() {
        return(
            <Bodyy>
                <img src={background} className="background" alt="Background"/>
                <div className="body">
                <div className="background-principal">
                    <h3 className="entrar">
                        Entrar
                    </h3>
                    <form>
                        <input 
                        type="email number" 
                        placeholder="Email ou numero de telefone"  
                        className="email_or_number"
                        />
                        <br/>
                        <input 
                        type="password"
                        placeholder="Senha"
                        className="password_s"
                        />

                        <br/>
                        <Link className="link-1" to="/home">
                            <button className="button_entrar">
                                Entrar
                            </button>
                        </Link>
                        <br/>
                        <Link className="link-2" to="/Criar-Conta">
                            <button className="button_criarConta">
                                Criar conta
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
            </Bodyy>
        )
    }
}

export default Login;