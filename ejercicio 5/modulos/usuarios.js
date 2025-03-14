// se importa la funcion solicitud para hacer la peticion a la api
import solicitud from "./solicitud.js";
// funcion asincrona para obtener usuarios desde la api
export const getUsuarios = async (URL, id) => {
    let ruta = ""; // Variable donde se almacenará la URL a solicitar
    // si se proporciona un id, se filtra por ese usuario
    if (id) {
        ruta = `${URL}/users?id=${id}`; // construye la url con el id del usuario
    } else {
        ruta = `${URL}/users`;// si no hay id, obtiene todos los usuarios
    }
    // se realiza la peticion a la api con la ruta definida y se almacena la respuesta en usuarios
    const usuarios = await solicitud(ruta);
    return usuarios; // se retorna la lista de usuarios obtenidos desde la api
};