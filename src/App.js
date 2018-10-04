import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './js/home';
import Siguiendo from './js/siguiendo';
import NavBar from './utils/navbar';
import Perfil from './js/perfil';
import Detalles from './utils/detalles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path='/' exact component={Home} />
        <Route path='/siguiendo' exact component={Siguiendo} />
        <Route path='/perfil' exact component={Perfil} />
        <Route path='/detalles/:id' render={(props) => <Detalles {...props} /> } />
      </div>
    );
  }
}

export default App;
