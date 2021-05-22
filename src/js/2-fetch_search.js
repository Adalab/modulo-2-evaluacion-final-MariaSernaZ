/*
1- Llamar a la API
2- Por cada show contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos imagen y título de la serie
---3--- Series sin imagen --> mostrar imagen de relleno: https://via.placeholder.com/210x295/ffffff/666666/?text=TV
 */


function getDataShows(){
    let inputValue = inputElement.value; //Necesitamos el valor del input para incluirlo en la url del fetch

    fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data); //Nos devuelve un array de objetos con series
            globalShows = data; //Asignamos el array de objetos a una variable
            //console.log(globalShows);
            renderList(globalShows);
        });
}


function renderList(data){
    ulElement.innerHTML = "";
    //const show = data[0].show;
    //console.log(show);

    for (let i=0; i<data.length; i++){
        let show = data[i].show;
        let imgShow = data[i].show.image.medium;
        //console.log(imgShow);
        let titleShow = data[i].show.name;


        if(data[i].show.image != null){
            ulElement.innerHTML += 
            `<li id="${show.id}" class="js-resultList-item list-item">
                <img src="${imgShow}" alt="Imagen ${titleShow} class="js-img"> 
                <p>${titleShow}</p>
            </li>`;
            
        } else {
            ulElement.innerHTML += `
            <li id="${show.id}" class="js-resultList-item list-item">
                <img src="${imgDefault}" alt="Imagen ${titleShow} class="js-img">
            </li>`;
        }
    }
}


function handleSearch(){
    getDataShows();
}

searchElement.addEventListener('click', handleSearch);
