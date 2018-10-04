import React, { Component } from 'react';
import '../css/pin.css';
import { Link } from 'react-router-dom';


class Pin extends Component {
    constructor() {
        super()
        this.state = {}
        this.guardarBtn = React.createRef()
    }

    showButton() {
        this.guardarBtn.current.style.opacity = '1'
    }

    hideButton() {
        this.guardarBtn.current.style.opacity = '0'
    }

    render() {
        return (
            <div className="pin" onMouseEnter={() => this.showButton()} onMouseLeave={() => this.hideButton()} >
                <img src={this.props.img} alt={this.props.alt} width='100%' />
                <button className="guardar-btn" ref={this.guardarBtn}><i className="fas fa-thumbtack"></i>Guardar</button>
                <p>Tags: {this.props.tags}</p>
                <Link to={`/detalles/${this.props.id}`}>Detalles</Link>
            </div>
        );
    }
}

export default Pin;