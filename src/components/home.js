import React, { Component } from 'react';
import '../css/home.css';
import Pin from '../utils/pin';
import { connect } from 'react-redux'


const API_URL = 'https://pixabay.com/api/?key=8488791-68b04ec9b6a5522f785e8019b&q=yellow+flowers'

class Home extends Component {
  constructor() {
    super()
    this.state = {}
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
    
    let list = this.state.data ? this.state.data.hits.map(item => {
      return (<Pin img={item.previewURL} key={Math.random()} alt={item.tags} tags={item.tags} id={item.id} />)
    }) : null

    return (
      <div className="App">
        <h1>Bienvenido {this.props.userName}!</h1>
        <div className="container" id="photo-container" >
          {list}
        </div>
        {this.state.data ? console.log(this.state.data) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    userName: state.user.mail
   }
}

export default connect(mapStateToProps)(Home);