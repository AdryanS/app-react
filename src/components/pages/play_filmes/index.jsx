import React, {Component} from 'react';
import Player from 'react-dplayer';
import Bodyy from './style'

class index extends Component {

  state = {
    info: [],
    tipo: []


  }

  componentDidMount() {
    const parame = this.props.params.filme
    const pegar_info = async () => {
      await fetch(`http://127.0.0.1:3080/api/filme/info/${parame}`)
        .then(a => a.json())
        .then(a => this.setState({info: a}),(res) => res).then(console.log)
        
    
    }
console.log(this.state.tipo)
    pegar_info()

  }

  // `http://appcliente.com:8880/movie/fullip/adgptw/${this.props.params.filme}.${
  // t his.state.info.movie_data.container_extension}`

  render() {


    return <Bodyy>
      <div className="player">
        <Player
          options={{
          video: {
            url: `http://appcliente.com:8880/movie/fullip/adgptw/${this.props.params.filme}.mkv`
          }
        }}/>
      </div>
    </Bodyy>;
  }
}

export default index;
