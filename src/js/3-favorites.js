/* Click serie favorita:
1- Color de fondo y fuente se intercambian --> toggle al li
2- Mostrar listado en parte izq con series seleccionadas
3- Series favoritas siguen apareciendo aunque usuaria realice otra búsqueda
*/

let favoriteShows = [];

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

    favShowClicked.classList.toggle('favorite');
    
}




