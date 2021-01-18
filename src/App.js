import React from 'react';
import './App.css'
import Tareasss from './componentes/tareas';
import FormTareas from "./componentes/formTareas";

const tareas = (JSON.parse(localStorage.getItem('tareas')) === null) ? [] : JSON.parse(localStorage.getItem('tareas'));

class App extends React.Component {

  state = {
    tareas: tareas
  }

  agregarTarea = (titulo, descripcion) => {
    const nuevaTarea = {
      titulo: titulo,
      descripcion: descripcion,
      id: this.state.tareas.length,
      done: false
    }

    if (localStorage.getItem('tareas') === null) {
      let tareas = [];
      tareas.push(nuevaTarea);
      localStorage.setItem('tareas', JSON.stringify(tareas));
      this.setState({
        tareas: tareas
      })
    }
    else {
      let tareas = JSON.parse(localStorage.getItem('tareas'));
      tareas.push(nuevaTarea);
      localStorage.setItem('tareas', JSON.stringify(tareas))
    }

    this.setState({
      tareas: JSON.parse(localStorage.getItem('tareas'))
    })
  }

  eliminarTarea = titulo => {

    let tareas = JSON.parse(localStorage.getItem('tareas'));
    for (let i = 0; i < tareas.length; i++) {
      if (tareas[i].titulo === titulo) {
        tareas.splice(i, 1);
      }
    }
    localStorage.setItem('tareas', JSON.stringify(tareas));

    this.setState({
      tareas: JSON.parse(localStorage.getItem('tareas'))
    })

  }

  checkDone = (titulo) => {

    const nuevasTareas = this.state.tareas.map(tareas => {

      if (tareas.titulo === titulo) {
        tareas.done = !tareas.done
      }
      return tareas;
    })
    this.setState({
      tareas: nuevasTareas
    })
  }

  render() {
    return (
      <div>
        <FormTareas agregarTarea={this.agregarTarea} />
        <Tareasss
          tareas={this.state.tareas}
          eliminarTareas={this.eliminarTarea}
          checkDone={this.checkDone}
        />
      </div>
    )
  }
}

export default App;
