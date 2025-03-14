// se importa la funcion solicitud para hacer la peticion a la api
import solicitud from "./solicitud.js";
// funcion asincrona que obtiene los albums del usuario desde la api
export const getAlbumes = async (URL, usuario) => {
    // se realiza la peticion a la api con el id del usuario para obtener sus albums
    return await solicitud(`${URL}/albums?userId=${usuario}`);
}