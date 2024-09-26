const inputSearch = document.querySelector(".input__search")
const search = document.getElementById('search')
const img = document.getElementById('img__gallery')
const ACCESS_KEY = 'ofyoLJAcFjrVVZfB4DXLhMk2zI_iIOUtAIQK2HTaZs8'



let state = [];

// Функция для получения фотографий
const fetchPhotos = async (query = 'nature') => {
    const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=10&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    
        if (response.ok && data.length) {
            state = data;
        }
};

