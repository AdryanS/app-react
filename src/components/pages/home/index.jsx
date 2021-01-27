import React, {Component} from 'react';
import {Link} from 'wouter'
import Bodyy from './style';

import background from '../../img/background.jpg';
import tv from '../../img/television.png';
import camera from '../../img/camera-film.png';
import claquete from '../../img/clapperboard.png';
import sair from '../../img/simbolo-de-seta-de-login-entrando-em-um-quadrado.png';

class home extends Component{
    render() {
        return(
            <Bodyy>
                <img src={background} className="backg" alt="Background"/>
                <div className="background-principal">
                    <div className="dive">
                        <div className="aling-itens">
                            <Link to="/lives" >
                                <button className="button">
                                    <div>
                                        <img src={tv} alt="television"/>
                                        <p>canais de tv</p>
                                    </div>
                                </button>
                            </Link>

                            <Link to="/filmes" >
                                <button className="button">
                                    <div>
                                        <img src={camera} alt="camera"/>
                                        <p>filmes</p>
                                    </div>
                                </button>
                            </Link>
                        
                            <Link to="/series" >
                                <button className="button">
                                    <div>
                                        <img src={claquete} alt="series"/>
                                        <p>series</p>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="sair">
                    <Link to="/">
                        <img src={sair} alt="sair"/>
                    </Link>
                </div>
            </Bodyy>
        )
    }
}


export default home;