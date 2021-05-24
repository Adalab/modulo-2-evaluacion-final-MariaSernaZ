/* Click serie favorita:
1- Color de fondo y fuente se intercambian --> toggle al li //favShowClicked.classList.toggle('favorite');
2- Mostrar listado en parte izq con series seleccionadas
3- Series favoritas siguen apareciendo aunque usuaria realice otra búsqueda
*/

function addListenerLi(){
    //Le añadimos un listener a todos los <li> 
    const allShows = document.querySelectorAll('.js-resultList-item'); //Nos devolverá un array

    //A cada <li> seleccionado, le añadimos/quitamos como favorito
    for(const show of allShows){
        show.classList.remove('favorite');
        show.addEventListener('click', handleClickFav);
    }
}

function handleClickFav(event){
    //console.log(event.target);
    //Con currentTarget seleccionamos todo el elemento <li>. Sin embargo, con target únicamente seleccionamos cada elemento de <li> por separado
    
    const favShowClicked = event.currentTarget;


    /*Tenemos que comprobar si la serie seleccionada está en el array de favoritos. Si:
        - no está en favoritos, la añadimos
        - estaba en favoritos, la quitamos (buscamos la posición y hacemos .splice. Otra opción es con filter)
    */
    
    //Identificamos el id (valor único) de la serie favorita para hacer push en nuevo array favoriteShows
    const selectedId = parseInt(favShowClicked.id);
    console.log(selectedId);

    //Buscamos el identificador de la serie seleccionada en el array de favoritos (favoriteShows) para comprobar si ya está en favoritos. Find nos devolverá el primer elemento o undefined
    const showIdInfo = favoriteShows.find((fav) => fav.show.id === selectedId);
    console.log("Id",showIdInfo); //Devuelve undefined
    console.log("qué es",favoriteShows); //Nos devuelve un array de objetos seleccionados como favoritos

    if(showIdInfo === undefined){
        //id clickado no está en array de favoritos --> lo añadimos

        const showData = globalShows.find((show) => show.show.id === selectedId);
        favoriteShows.push(showData);

    } else {
        //id clickado está en array de favoritos --> lo quitamos
        const indexIdFav = favoriteShows.findIndex(fav => fav.show.id === selectedId);
        favoriteShows.splice(indexIdFav, 1);

        /*Otra opción:
        favoriteShows = favoriteShows.filter((fav) => fav.show.id !== selectedId); //Nos genera un nuevo array actualizado que asignamos a al array inicial favoriteShows*/
    }
    
    setInLocalStorage (); //Con la condición anterior modificamos nuestro array de favoritos, por tanto, guardaremos en localStorage

    console.log('tipoInfo', favoriteShows);//Nos devuelve un array de objetos de fav
    
    renderListFav();
}


function renderListFav(){
    ulElementFav.innerHTML= "";//tenemos que vaciar ul para que no nos vaya repitiendo los favoritos ya elegidos  

    for (let favShow of favoriteShows){
        console.log('favorita:',favShow);
                 
        let imgShow = "";

        if(favShow.show.image != null){
            imgShow = favShow.show.image.medium;
        } else {
            imgShow = imgDefault;
        }

        ulElementFav.innerHTML += 
            `<li id="${favShow.id}" class="js-resultList-item list-item favorite">
                <img src="${imgShow}" alt="Imagen ${favShow.show.name} class="js-img"> 
                <p>${favShow.show.name}</p>
            </li>`;
    }
}