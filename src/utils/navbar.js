import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';

class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      page: {inicio: true}
    }
  }

  currentPage(el){
    switch(el.target.pathname){
      case '/':
      this.setState({page: {inicio: true}})
      break;
      case '/siguiendo':
      this.setState({page: {siguiendo: true}})
      break;
      case '/perfil':
      this.setState({page: {perfil: true}})
      break;
    }
  }

  render() {
    return (
      <div className="navbar">
        <img src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" height="28px" alt="Logo" />
        <input type="text" placeholder="Buscar" />
        <div className="navlinks">
            <Link to="/" className={this.state.page.inicio ? 'navlink current' : 'navlink'} onClick={(e) => this.currentPage(e)} >Inicio</Link>
            <Link to="/siguiendo" className={this.state.page.siguiendo ? 'navlink current' : 'navlink'} onClick={(e) => this.currentPage(e)} >Siguiendo</Link>
            <Link to="/perfil" className={this.state.page.perfil ? 'navlink current' : 'navlink'} onClick={(e) => this.currentPage(e)} >Perfil</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
