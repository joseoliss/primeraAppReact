import React, { Component } from "react";
import "./formTareas.css";

class FormTareas extends Component {

    state = {
        titulo: '',
        descripcion: ''
    }

    enviarForm = (e) => {
        e.preventDefault();
        if (this.state.titulo !== "" && this.state.descripcion !== "") {
            this.props.agregarTarea(this.state.titulo, this.state.descripcion);
            this.setState({
                titulo: "",
                descripcion: ""
            })
        } else {
            alert("Complete el formulario");
        }
    }

    escribiendo = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form autoComplete="off" id="form" className="form" onSubmit={this.enviarForm}>
                <input
                    maxLength={50}
                    className="txt"
                    name="titulo"
                    type="text"
                    placeholder="Agrega una tarea"
                    onChange={this.escribiendo}
                    value={this.state.titulo}
                />
                <textarea
                    maxLength={100}
                    type="text"
                    className="txtArea"
                    name="descripcion"
                    placeholder="Escribe una descripción"
                    onChange={this.escribiendo}
                    value={this.state.descripcion}>
                </textarea>
                <button className="btn" type="submit">
                    Agregar
                </button>
            </form>
        )
    }
}

export default FormTareas;