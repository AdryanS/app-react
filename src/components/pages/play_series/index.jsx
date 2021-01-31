import React, {Component} from 'react';
import Bodyy from './style'
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';


class index extends Component {
  player = {}
  state = {
    info: [],
    movie_data: []
  }

  componentDidMount() {
    const parame = this.props.params.filme
    const pegar_info = async() => {
      const response = await fetch(`/api/filme/info/${parame}`)
      const data = await response.json()
      this.setState({info: data.info})
      this.setState({movie_data: data.movie_data})
      console.log(this.state.info)
    }
    pegar_info()

  }


  // `http://appcliente.com:8880/movie/fullip/adgptw/${this.props.params.filme}.${
  // t his.state.info.movie_data.container_extension}`

  render() {
    const stado = this.state.info

    return (<Bodyy>
      <div className="player">
      <ShakaPlayer src={`http://appcliente.com:8880/movie/fullip/adgptw/${this.props.params.filme}.${this.state.movie_data.container_extension}`} autoplay onplay="" />
      </div>
    </Bodyy>);
  }
}

export default index;
