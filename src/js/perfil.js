import React, { Component } from 'react';

class Perfil extends Component {
    constructor() {
        super()
        this.state = {
            img: []
        }
    }

    uploadPhoto(e) {
        e.preventDefault()
        console.log(e.target.value)
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h1>Subir Foto</h1>
                <form action="myform.cgi">
                    <input type="file" name="fileupload" id="fileupload" onDragOver={e => this.uploadPhoto(e)} onChange={e => this.uploadPhoto(e)} />
                </form>
                {
                    this.state.img ? this.state.img.map(img => {
                        return (<img src={img} alt="img" />)
                    }) : null
                }
            </div>
        );
    }
}

export default Perfil;