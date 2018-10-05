import React, { Component } from 'react';
import Login from './components/login';
import { connect } from 'react-redux';
import Layout from './components/layout';

class App extends Component {
  render() {
    return (
      this.props.login ? <Layout /> : <Login />
    );
  }
}

const mapStateToProps = (store) => {
  return {login: store.login}
}

export default connect(mapStateToProps)(App);
