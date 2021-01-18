import React from "react";
import PropTypes from 'prop-types';
import './Tarea.css';


class Tarea extends React.Component {

    estilosCompletados() {
        return {
            fontSize: '20px',
            color: this.props.tarea.done ? 'green' : 'white'
        }
    }

    render() {
        return (
            <div className="inline" style={this.estilosCompletados()}>
                <div className="contenedor">
                    <h2>
                        {this.props.tarea.titulo}
                    </h2>
                    <p>
                        {this.props.tarea.descripcion}
                    </p>
                    <p>Completada: </p><input
                        className="check"
                        checked={this.props.tarea.done ? true : false}
                        type="checkbox"
                        onChange={this.props.checkDone.bind(this, this.props.tarea.titulo)}
                    />
                    <button style={btnDelete} onClick={this.props.eliminarTareas.bind(this, this.props.tarea.titulo)}>
                        x
                    </button>
                    <br />
                </div >
            </div >
        )
    }



}

Tarea.propTypes = {
    tarea: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    outline: 'none',
    marginTop: '20px'
}



export default Tarea;