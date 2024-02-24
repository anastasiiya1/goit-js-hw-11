import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchCards } from './js/pixabay-api';
import { galleryList, renderCards, toggleLoader } from './js/render-functions';

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
    event.preventDefault();
  
    const searchInput = document.querySelector('.search-input');
    const userSearchQuery = searchInput.value.trim();
  
    if (userSearchQuery === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a keyword before submitting the form.',
      });
      return false;
    };
  
    galleryList.innerHTML = '';
    toggleLoader();
  
    fetchCards(userSearchQuery)
      .then(data => {
        renderCards(data);
      })
      .then(() => toggleLoader())
      .catch(error => {
        console.error('Error fetching images:', error);
        iziToast.error({
          title: 'Error',
          message: 'An unexpected error occurred while fetching images. Please try again.',
        });
      });
  }




