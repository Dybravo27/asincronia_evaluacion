// se importa la funcion para hacer la peticion a la api
import solicitud from "./solicitud.js";
// funcion asincrona que obtener los posts de un usuario desde la api
export const getPost = async (URL, usuario) => {
    // se realiza la peticion a la api con el id del usuario para obtener sus posts
    return await solicitud(`${URL}/posts?userId=${usuario.id}`);
}