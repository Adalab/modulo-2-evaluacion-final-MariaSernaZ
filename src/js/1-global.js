'use strict';

const formElement = document.querySelector('.js-form');
const inputElement = document.querySelector('.js-input');
const searchElement = document.querySelector('.js-button');
const ulElement = document.querySelector('.js-resultList');


const imgDefault = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';


let globalShows = [];
let favoriteShows = [];