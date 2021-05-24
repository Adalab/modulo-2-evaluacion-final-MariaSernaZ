/*Borrar favoritos:
Al hacer clic sobre el icono de una 'x' al lado de cada favorito, borrar favorito clicado:
    - de la lista y 
    - del localStorage
Para terminar de rematar nuestra app de series, nos gustaría poder añadir/quitar como favorito al hacer clic
sobre una serie del lado de la derecha. Y que, si realizamos una nueva búsqueda y sale una serie que ya es
favorita, aparezca ya resaltada en los resultados de búsqueda (con colores de fondo y texto
intercambiados).

Al final lista de favoritos --> botón para borrarlos todos los favoritos a la vez
*/


function handleClickReset(){
    favoriteShows = [];

    //Borramos lista fav
    renderListFav();

    //Borramos localStorage
    setInLocalStorage();
    renderFavLocalStorage();
}

resetElement.addEventListener('click', handleClickReset)
