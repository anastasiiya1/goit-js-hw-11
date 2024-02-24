const apiKey = '42469793-94d748bc29f10cf193212e81f';
const url = 'https://pixabay.com/api/?';

export function fetchCards(searchQuery) {
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${url}${searchParams}`)
  .then(response => {
    if (!response.ok) throw new Error('Failed to fetch images. Please try again later.');
    return response.json();
  });
}