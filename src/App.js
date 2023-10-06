import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";


function App() {

  //Me lo traigo aqui para comunicar y pasar el estado como props
  const [listadoState, setListadoState] = useState([]);


  return (
    <div className="layout">
        {/* Cabecera del sitio */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>Mis películas</h1>
        </header>

        {/* Barra de navegación */}
        <nav className="nav">
            <ul>
                <li> <a href="/#">Inicio</a></li>
                <li> <a href="/#">Películas</a></li>
                <li> <a href="/#">Blog</a></li>
                <li> <a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/* Contenido principal */}
        <section className="content">
            {/* Aquí van las películas */}
            <Listado listadoState={listadoState} setListadoState={setListadoState} />
        </section>

        {/* Seccion lateral */}
        <aside className="lateral">

            {/* Buscador de películas */}
            <Buscador listadoState={listadoState} setListadoState={setListadoState}/>

            {/* Añadir película */}
            <Crear listadoState={listadoState} setListadoState={setListadoState}/>
        </aside>

        {/* Pie de pagina */}
        <footer className="footer">
            Proyecto Películas - María Shaydrova
        </footer>

    </div>
  );
}

export default App;
