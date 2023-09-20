import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar película";

    const guardarEdicion = (e, id) => {

        //Para que no recargue
        e.preventDefault();

        //Conseguir el target del evento
        let target = e.target;

        //Rescato las pelis almacenadas reutilizando el método conseguirPeliculas()
        const pelis_almacenadas = conseguirPeliculas();

        //Buscar el índice del objeto de la película a actualizar
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //Crear objeto con ese indice
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        //Actualizar el elemento con ese indice:
        pelis_almacenadas[indice] = peli_actualizada;

        //Guardar el nuevo array de objetos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        //Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0); // Esto es para que se cierre el formulario
    }

  return (
    <div>
        <h3 className='title'>{titulo_componente}</h3>
        <form className='editar' onSubmit={ e => guardarEdicion(e, peli.id)}>
            <input type='text' name='titulo' className='titulo_editado' defaultValue={peli.titulo} />
            <textarea name='descripcion' defaultValue={peli.descripcion} className='descripcion_editada' />
            <input type='submit' className='editar' value="Actualizar" />
        </form>
    </div>
  )
}
