
//Esto es un método genérico para cualquier tipo de entidad

//En el componente Crear.js se le pasarn parámetros al método: "pelis" -> clave y pelicula -> elemento

export const GuardarEnStrorage = (clave, elemento) => {

    //Comprobar los elementos que ya tenemos en localStrorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    //Comprobar si es un array
    if(Array.isArray(elementos)){
      //Añadir al array un elemento nuevo
      elementos.push(elemento);
    }
    else{
      //Crear un array con el nuevo elemento sobreescribiendo elementos
      elementos = [elemento];
    }

    //Guardar en el localStorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver el objeto
    return elemento;

  }

