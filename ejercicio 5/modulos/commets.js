// se importa la funcion solicitud para hacer la peticion de la api
import solicitud from "./solicitud.js";
// funcion asincrona para obtener los comentarios de un post desde la api
export const getCommets = async (URL, post) => {
    // se realiza la peticion a la api con el id del post para obtener sus comentarios
    return await solicitud(`${URL}/comments?postId=${post.id}`);
}