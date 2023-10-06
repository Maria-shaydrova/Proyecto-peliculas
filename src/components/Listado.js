import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

    //Aqui había un estado de listado de peliculas que se ha movido al componente App.js 
    //De ahi hasta aquí se pasa el estado como una props

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        console.log("Componentes del listado de películas cargado");
        conseguirPeliculas();
    }, []);
    //Array vacío significa que será el primer método al cargar el componente y solo se va a ejecutar una vez

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        //Metemos las películas que hemos sacado del localStorage al estado listadoState mediante la funcion correspondiente:
        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {

        //Conseguir el listadoState de peliculas
        let pelis_almacenadas = conseguirPeliculas();

        //Filtrar para eliminar la pelcula que quiero borrar
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        //Actualizar el estado del listadoState
        setListadoState(nuevo_array_pelis);

        //Actualizar los datos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
    }

    return (
        <>
            {listadoState != null ?

                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>
                            <div className='botones'>
                                <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                                <button onClick={() => borrarPeli(peli.id)} className="delete">Eliminar</button>
                            </div>
                            {/* Aparece formulario de editar */}
                            {
                                editar === peli.id && (<Editar peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState} />)
                            }
                        </article>
                    );
                })
                :
                <div className='mensaje'><p></p></div>
            }
        </>
    )
}
