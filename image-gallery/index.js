const inputSearch = document.querySelector(".input__search")
const search = document.getElementById('search')
const img = document.getElementById('img__gallery')
const ACCESS_KEY = 'ofyoLJAcFjrVVZfB4DXLhMk2zI_iIOUtAIQK2HTaZs8'



let state = [];

// Функция для получения фотографий
const fetchPhotos = async (query = 'nature') => {
    const url = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=30&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    
        if (response.ok && data.length) {
            state = data;
            displayPhotos();
        }
};

// Функция для отображения 
const displayPhotos = () => {
    img.innerHTML = ''; 

    state.forEach(photo => {
        const container = document.createElement('div');
        container.classList.add('container');

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        imgDiv.style.backgroundImage = `url(${photo.urls.regular})`; 

        const photoByText = document.createElement('span');
        photoByText.classList.add('photo_by');
        photoByText.textContent = 'Photo by ';

        const photographerName = document.createElement('span');
        photographerName.classList.add('photographers__name');
        photographerName.textContent = photo.user.name;

        const instagramLink = document.createElement('a');
        instagramLink.classList.add('svg_inst');
        instagramLink.href = `https://www.instagram.com/${photo.user.instagram_username}/`;
        instagramLink.target = '_blank';

        const instagramIcon = document.createElement('img');
        instagramIcon.classList.add('inst_svg');
        instagramIcon.src = 'img/inst.png'; 
        instagramIcon.alt = 'Instagram';

        instagramLink.appendChild(instagramIcon);

        container.appendChild(imgDiv);
        container.appendChild(photoByText);
        container.appendChild(photographerName);
        container.appendChild(instagramLink);

        img.appendChild(container);
    });
};



fetchPhotos();