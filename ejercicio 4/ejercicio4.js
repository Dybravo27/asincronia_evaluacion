// se importa la funcion getUsuarios que hace la peticion que trae a
// los usuarios 
import { getUsuarios } from "../ejercicio 5/modulos/usuarios.js";
// se declara una variable de tipo const se asigna la url de la api
const URL = "https://jsonplaceholder.typicode.com";
const manejardatos = async () => {
  // se manejan los errores con el try catch en caso de haber algun error en la peticion
  try {
    // se declara la variable usuarios donde se almacena los usuarios traidos en la peticion
    const usuarios = await getUsuarios(URL);
    // se usa el Promise.all para ejecutar varias promesas, en este caso una por cada usuario
    // y con el .map se recorre todo el arreglo y si se cumple la promesa
    // nos muestra el nombre del usuario con el telefono
    return await Promise.all(usuarios.map(async (usuario) => {
      // se retorna el arreglo con el nombre y el telefono
      return {
        "nombre" : usuario.name,
        "telefono": usuario.phone
      };
    }));
  } catch (error) {
    throw new Error("Ocurrio una falla : " + error);
  }
};
// se llama la funcion y se muestra el primer usuario con sus datos
manejardatos().then((data) => {
  console.log(data); // imprime en consola el primer usuario con sus datos
});