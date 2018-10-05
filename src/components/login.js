import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LOGIN_SUCCESS } from '../redux/actions/actions';
import '../css/login.css';

export class login extends Component {
    constructor() {
        super()
        this.state = {
            mail: '',
            password: '',
            loginFail: false
        }
    }

    handleChange = e => { this.setState({ [e.target.name]: e.target.value }) }

    handleLogin = () => {this.state.password.length > 0 && this.state.mail.length > 0 ? this.props.loginEvent() : this.setState({loginFail: true}) }

    render() {
        return (
            <div className="log-in-container">
                <h2>Please log in</h2>
                <div>
                    <input placeholder="Usuario..." value={this.state.mail} name="mail" onChange={this.handleChange} />
                </div>
                <div>
                    <input placeholder="Contraseña..." type="password" value={this.state.password} name="password" onChange={this.handleChange} />
                </div>
                <button id="login-btn" onClick={() => this.handleLogin()} >Log In</button>
                {this.state.loginFail ? <h3 className="fail-login-text" >Please enter your info!</h3> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { login: state.login }
}

const mapDispatchToProps = (dispatch) => {
    return { loginEvent: (name, password) => dispatch({ type: LOGIN_SUCCESS }) }
}

export default connect(mapStateToProps, mapDispatchToProps)(login)
