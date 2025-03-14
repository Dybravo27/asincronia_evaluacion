// se importan las funciones desde el index.js
import { getUsuarios, getPost, getCommets,getAlbumes,getFotos } from "./modulos/index.js";
// se declara una variable de tipo const se asigna la url de la api
const URL = "https://jsonplaceholder.typicode.com";
const manejardatos = async () => {
    // se obtiene la lista de todos los usuarios desde la api
    const usuarios = await getUsuarios(URL);
    // se obtiene los comentarios de cada post
    return await Promise.all(usuarios.map(async (usuario) => {
        const posts = await getPost(URL, usuario); // se obtienen los posts de cada usuario
        const albums = await getAlbumes (URL,usuario.id); // se obtienen los albums de cada usuario
        const albumFotos = await Promise.all(albums.map(async (album) => {
            const fotos = await getFotos(URL, album);// se obtiene la lista de fotos del album haciendo una peticion a la api
            return { ...album, fotos } // retorna el album con sus fotos
        }))
        // se obtienen los comentarios de cada post usando Promise.all
        const comentPost = await Promise.all(posts.map(async (post) => {
            const coments = await getCommets(URL, post); // se obtiene los comentarios del post haciendo una peticion a la api
            return { ...post, coments }; // retorna el usuario con sus posts y comentarios
        }));
        // retorna el usuario con los posts, comentarios y albums con fotos
        return { ...usuario, comentPost ,albumFotos};
    }));
};
// se llama la funcion y se muestra el primer usuario con sus datos
manejardatos().then((data) => {
    console.log(data); // imprime en consola el primer usuario con sus datos
});