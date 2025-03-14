// funcion asincrona realiza la solicitud http a una url y devuelve la respuesta en formato json
const solicitud = async url => {
    const peticion = await fetch(url); // se realiza la solicitud http a la url
    const data = await peticion.json(); // se convierte la peticion a formato json
    return data; // retorna los datos obtenidos desde la api
}
// se exporta la funcion por defecto para usarla en otros archivos
export default solicitud 