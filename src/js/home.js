import React, { Component } from 'react';
import '../css/home.css';
import Pin from '../utils/pin';


const API_URL = 'https://pixabay.com/api/?key=8488791-68b04ec9b6a5522f785e8019b&q=yellow+flowers'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      width: window.innerWidth
    }
  }

  componentDidMount() {
    this.getData(API_URL)
  }

  getData(url) {
    fetch(url).then(d => d.json()).then(resp => this.setState({
      data: resp
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Pagina de Inicio</h1>

        <div className="container" id="photo-container" >
          {
            this.state.data ? this.state.data.hits.map(item => {
              console.log(item)
              return (<Pin img={item.previewURL} key={Math.random()} alt={item.tags} tags={item.tags} id={item.id} />)
            }) : null
          }
        </div>

        {
          this.state.data ? console.log(this.state.data) : null
        }

      </div>
    );
  }
}

export default Home;