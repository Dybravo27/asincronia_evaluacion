// se importa la funcion solicitud para hacer la peticion a la api
import solicitud from "./solicitud.js";
// funcion asincrona que obtiene la lista de tareas de cada usuario desde la api
export const getTodos = async (URL, usuario) => {
  // se realiza la peticion a la api con el id del usuario para obtener la lista de tareas
  return await solicitud(`${URL}/todos?userId=${usuario.id}`);
}