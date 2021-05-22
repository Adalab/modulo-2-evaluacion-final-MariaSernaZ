function getDataShows(){
    let inputValue = inputElement.value; //Necesitamos el valor del input para incluirlo en la url del fetch

    fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(response => response.json())
        .then((data) => {
            //console.log(data); //Nos devuelve un array de objetos con series
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
        let imgShow = show.image.medium;
        let titleShow = show.name;

        ulElement.innerHTML += `
        <li id="${show.id}" class="js-resultList-item list-item">
            <img src="${imgShow}" alt="Imagen ${titleShow} class="js-img"> 
            <p>${titleShow}</p>
        </li>`;

        if(imgShow === null){
            imgDefault;
        } else {
            imgShow;
        }
    }
}

function handleSearch(){
    getDataShows();
}


searchElement.addEventListener('click', handleSearch);
