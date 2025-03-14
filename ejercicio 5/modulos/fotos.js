// se importa la funcion solicitud para hacer la peticion a la api
import solicitud from "./solicitud.js";
// funciona asincrona que obtiene las fotos del album desde la api
export const getFotos = async (URL, album) => {
    // se realiza la peticion a la api con el id del album para obtener sus fotos
    return await solicitud(`${URL}/photos?albumId=${album.id}`);
}