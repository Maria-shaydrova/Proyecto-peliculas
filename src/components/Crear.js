import React, { useState } from 'react'
import { GuardarEnStrorage } from '../helpers/GuardarEnStorage';

export const Crear = ({listadoState, setListadoState}) => {

  const titulo = "Añadir película"

  const [peliState, setPeliState] = useState({
    titulo: '',
    descripcion: ''
  });
  // const [elemento, setElemento] = useState([]);

  const conseguirDatosForm = (e) =>{

    //Para que no recargue la página al enviar el formulario
    e.preventDefault();

    //Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    //Crear objeto de la pelcula a guardar
    let pelicula = {
      id: new Date().getTime(),
      titulo: titulo,
      descripcion: descripcion
    }

    // Guardar estado
    setPeliState(pelicula);

    // Actualizar el estado del listado principal
    if (listadoState !== null) {
      setListadoState([pelicula, ...listadoState]);
    } else {
      // Si listadoState es nulo (sin películas previas), inicialízalo como un array con la película actual
      setListadoState([pelicula]);
    }

    //Guardar en el almacenamiento local
    GuardarEnStrorage("pelis", pelicula);
    //Esto es si quisieramos hacer una copia, se crearia otro objeto con clave copia:
    // GuardarEnStrorage("copia", pelicula);
  }

 
  return (
    <div className="add">
        <h3 className="title">{titulo}</h3>
        <form onSubmit={conseguirDatosForm}>
            <input type="text" id='titulo' name='titulo' placeholder="Título" />
            <textarea id='descripcion' name='descripcion' placeholder="Descripción" />
            <input type="submit" value="Guardar" />
        </form>
    </div>
  )
}
