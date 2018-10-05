import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import Home from './home';
import Siguiendo from './siguiendo';
import NavBar from '../utils/navbar';
import Perfil from './perfil';
import Detalles from '../utils/detalles';
import { BrowserRouter } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path='/' exact component={Home} />
          <Route path='/siguiendo' exact component={Siguiendo} />
          <Route path='/perfil' exact component={Perfil} />
          <Route path='/detalles/:id' render={(props) => <Detalles {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
