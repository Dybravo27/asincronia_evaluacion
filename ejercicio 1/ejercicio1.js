// se importa la funcion getTodos 
import { getTodos } from "../ejercicio 5/modulos/todos.js";
import { getUsuarios } from "../ejercicio 5/modulos/usuarios.js";
// se declara una variable de tipo const se asigna la url de la api
const URL = "https://jsonplaceholder.typicode.com";
const manejardatos = async () => {
  try {
    // se declara la variable usuarios donde se almacena los usuarios traidos en la peticion
    const usuarios = await getUsuarios(URL);
    // se usa el Promise.all para ejecutar varias promesas, en este caso una por cada usuario
    // y con el .map se recorre todo el arreglo y si se cumple la promesa se retorna el usuario con la lista de tareas
    return await Promise.all(usuarios.map(async (usuario) => {
      const tareas = await getTodos(URL, usuario); // se obtienen los posts de cada usuario
      // se obtienen la lista de tareas de cada post usando Promise.all
      const listaTareas = await Promise.all(tareas.map(async (tarea) => {
        return { ...tarea}; // retorna el usuario con sus posts y comentarios
      }));
      // retorna el usuario con la lista de tareas
      return { ...usuario, listaTareas};
    }));
  } catch (error) {
    throw new Error("Ocurrio una falla : " + error);
  }
};
// se llama la funcion y se muestra el primer usuario con sus datos
manejardatos().then((data) => {
  console.log(data); // imprime en consola el primer usuario con sus datos
});