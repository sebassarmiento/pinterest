import React, { Component } from 'react';

class Detalles extends Component {
  render() {
    console.log(this.props, 'ACA')
    return (
      <div className="App">
        <h1>{this.props.objeto}</h1>
      </div>
    );
  }
}

export default Detalles;