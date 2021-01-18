import React from 'react'
import Tarea from "./tarea";

class Tareasss extends React.Component {
    render() {
        return (
            this.props.tareas.map(e => (
                <Tarea
                    tarea={e}
                    key={e.id}
                    eliminarTareas={this.props.eliminarTareas}/*Eliminar tares viene de app.js y lo pasamos a otros componente*/
                    checkDone={this.props.checkDone}
                />
            ))
        )
    }
}

export default Tareasss;