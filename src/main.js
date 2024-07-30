import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { renderGallery } from "./js/render-functions";

import { searchByQuery } from "./js/pixabay-api";

const input = document.querySelector('.search-input')

const btn = document.querySelector('.search-btn')

const form = document.querySelector('.search-form')

const loadingIndicator = document.querySelector('.loader');


form.addEventListener('submit', handleSearch)

function showLoadingIndicator() {
    loadingIndicator.classList.remove('hidden');
}

function hideLoadingIndicator() {
    loadingIndicator.classList.add('hidden');
}

function handleSearch(event) {
    event.preventDefault()

    const queryValue = event.currentTarget.elements.query.value.trim().toLowerCase()
    if (queryValue === '') {
        iziToast.info({
            message: 'Type something to find!'
        })
        return
    } 

    showLoadingIndicator();

    searchByQuery(queryValue)
    .then(renderGallery)
    .catch(onError)
    .finally(() => {
        hideLoadingIndicator();
        if (form) {
            form.reset();
        }
    })
}

function onError(error) {
    iziToast.error({
        title: 'Error',
        message: `An error occured! ${error}`
    })
}
// searchByQuery('dog')
// .then((data) => {
//     console.log(data);
// })
// .catch(console.log)