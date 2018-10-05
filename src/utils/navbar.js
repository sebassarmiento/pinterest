import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { LOGOUT_SUCCESS } from '../redux/actions/actions';
import '../css/navbar.css';

class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      page: { inicio: true }
    }
  }

  currentPage(el) {
    switch (el.target.pathname) {
      case '/':
        this.setState({ page: { inicio: true } })
        break;
      case '/siguiendo':
        this.setState({ page: { siguiendo: true } })
        break;
      case '/perfil':
        this.setState({ page: { perfil: true } })
        break;
      default:
        console.log('Not a path')
    }
  }

  render() {
    return (
      <div className="navbar">
        <img src="https://seeklogo.com/images/P/pinterest-badge-logo-82C89A5E42-seeklogo.com.png" height="28px" alt="Logo" />
        <input type="text" placeholder="Buscar" className="input-navbar" />
        <div className="navlinks">
          <Link to="/" className={this.state.page.inicio ? 'navlink current' : 'navlink'} onClick={(e) => this.currentPage(e)} >Inicio</Link>
          <Link to="/siguiendo" className={this.state.page.siguiendo ? 'navlink current' : 'navlink'} onClick={(e) => this.currentPage(e)} >Siguiendo</Link>
          <Link to="/perfil" className={this.state.page.perfil ? 'navlink current' : 'navlink'} onClick={(e) => this.currentPage(e)} >Perfil</Link>
          <button className="navlink" onClick={this.props.logout} >Salir</button>
          <span className="username">
            <img src="https://image.flaticon.com/icons/png/128/149/149071.png" height={28} />{this.props.userName.toUpperCase()}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.user.mail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: LOGOUT_SUCCESS })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
