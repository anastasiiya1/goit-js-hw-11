import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.getElementById('search-form');
const galleryList = document.querySelector('.gallery-list');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const searchInput = document.querySelector('.search-input');
  const userSearchValue = searchInput.value.trim();

  if (userSearchValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a keyword before submitting the form.',
    });
    return false;
  }

  const apiKey = '42469793-94d748bc29f10cf193212e81f';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    userSearchValue
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images. Please try again later.');
      }
      return response.json();
    })
    .then(responseData => {
      handleApiResponse(responseData);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
      });
    });

  return false;
});

const handleApiResponse = response => {
  galleryList.innerHTML = '';

  if (response.hits.length > 0) {
    response.hits.forEach(image => {
      const liElement = document.createElement('li');
      liElement.classList.add('gallery-item');

      const imgElement = document.createElement('img');
      imgElement.src = image.webformatURL;
      imgElement.alt = image.tags;

      liElement.appendChild(imgElement);
      galleryList.appendChild(liElement);
    });
  } else {
    iziToast.info({
      title: 'Info',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
};
