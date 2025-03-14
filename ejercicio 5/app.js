// se importan las funciones donde se realizan las solicitudes de usuarios, post,comentarios,albumes y fotos desde el index.js
import { getUsuarios, getPost, getCommets,getAlbumes,getFotos } from "./modulos/index.js";
// se declara una variable de tipo const se asigna la url de la api
export const URL = "https://jsonplaceholder.typicode.com";
const manejardatos = async () => {
  // se manejan los errores con el try catch en caso de haber algun error en las peticiones
  try {
    // se declara la variable usuarios donde se almacena los usuarios traidos en la peticion
    const usuarios = await getUsuarios(URL);
    // se usa el Promise.all para ejecutar varias promesas, en este caso una por cada usuario
    // y con el .map se recorre todo el arreglo y si se cumple la promesa se retorna el usuario con los posts, los comentarios y los albums con las fotos
    return await Promise.all(usuarios.map(async (usuario) => {
      const posts = await getPost(URL, usuario); // se obtienen los posts de cada usuario
      // se declara la variable albums donde se guarda el arreglo con los albums que tiene cada usuario
      const albums = await getAlbumes(URL, usuario.id); // se obtienen los albums de cada usuario
      // se obtiene todas las fotos de cada album con el .map recorremos cada elemento del arreglo
      const albumFotos = await Promise.all(albums.map(async (album) => {
        const fotos = await getFotos(URL, album);// se obtiene la lista de fotos del album haciendo una peticion a la api
        return { ...album, fotos } // retorna el album con sus fotos
      }))
      // se obtienen los comentarios de cada post con el .map recorremos cada elemento del arreglo
      const comentPost = await Promise.all(posts.map(async (post) => {
        const coments = await getCommets(URL, post); // se obtiene los comentarios del post haciendo una peticion a la api
        return { ...post, coments }; // retorna el usuario con sus posts y comentarios
      }));
      // retorna el usuario con los posts, comentarios y albums con fotos
      return { ...usuario, comentPost, albumFotos };
    }));
  } catch (error) {
    throw new Error("Ups ocurrio una falla : " + error);
  }
};
// se llama la funcion y se muestra el primer usuario con sus datos
manejardatos().then((data) => {
  console.log(data); // imprime en consola el primer usuario con sus datos
});