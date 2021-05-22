let globalShows = [];
let favoriteShows = [];

//Llamamos a la API

function getDataShows(){
    let inputValue = inputElement.value; //Necesitamos el valor del input para incluirlo en la url del fetch
    const imgDefault = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV'

    fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data); //Nos devuelve un array de objetos
            renderList(data);
        });
}

function renderList(data){
    
            /*for (let i=0; i<data.length; i++){
                const nameShows = data[i].show.name;
                let imgShow = data[i].show.image;

                if(imgShow === null){
                    imgDefault;
                } else {
                    imgShow.medium;
                }
            }*/
            
            //paintShowsInResults();
}

function handleSearch(){
    getDataShows();
}


searchElement.addEventListener('click', handleSearch);
