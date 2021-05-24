//Almacenar el listado de favoritos en el localStorage --> al recargar la página el listado de favoritos debe mostrarse

//Set in local storage
const setInLocalStorage = () => {
    const stringFav = JSON.stringify(favoriteShows);
    localStorage.setItem('favShows', stringFav); 
};


function renderFavLocalStorage(){
const localStorageFav = localStorage.getItem('favShows');
console.log('localStorage-Info', localStorageFav);// nos devuelve null cuando está vacío o array si contiene favoritos

if (localStorageFav === null){
    //No tiene los datos guardados, array favoritos vacío 
    favoriteShows = [];

}else{
    //Tiene los datos guardados en localStorage. Pasamos datos guardados a nuestro array de favoritos, transformamos de cadena a objeto y pintamos
    favoriteShows = JSON.parse(localStorageFav);

    renderListFav();
}
}

renderFavLocalStorage();