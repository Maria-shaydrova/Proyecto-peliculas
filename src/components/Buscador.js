import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);


  //Función para rescataras las películas del localStorage
  const conseguirPeliculas = () => {

    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    
    return peliculas;
}

  const buscarPeli = (e) =>{

    let peliculas = conseguirPeliculas();

    const searchText = e.target.value;
    setBusqueda(searchText);

    let pelis_encontradas;

    //Si se ha introducido al menos un caracteres en el campo de búsqueda
    if (searchText.length > 0) {
      //Filtramos las películas rescatadas del localStorage
      pelis_encontradas = peliculas.filter((peli) =>
        peli.titulo.toLowerCase().includes(searchText.toLowerCase())
      );

      //Si se han encontrado pelis
      if(pelis_encontradas.length > 0){
        //Actualizamos los estados
        setListadoState(pelis_encontradas);
        setNoEncontrado(false);
      }
      //Si se ha introducido un caracter pero no se han encontrado resultados:
      else  {
        setNoEncontrado(true);
        setListadoState(peliculas);
      }
    
    } else {
        setListadoState(peliculas);
        setNoEncontrado(false); 
   }
  } 

  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>

        {noEncontrado && busqueda.length > 0 && (
          <span className='no-encontrado'>No hay resultados</span>
        )}

        <form>
            <input type="text" 
                   id="search_field" 
                   name='busqueda' 
                   autoComplete='off' 
                   value={busqueda}
                   onChange={buscarPeli}/>

        </form>
    </div>
  )
}
