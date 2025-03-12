function searchItems() {
    const searchInputElement = document.getElementById('keyword');
    if (searchInputElement) {
        const searchInput = searchInputElement.value.toLowerCase();
        searchInSection('animeItems', searchInput);
        searchInSection('movieItems', searchInput);
    }
}

function searchInSection(sectionId, searchInput) {
    const items = document.getElementById(sectionId)?.querySelectorAll('.item') || [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemName = item.querySelector('.name');
        const itemNameText = itemName ? itemName.textContent.toLowerCase() : '';

        if (searchInput === "") {
            item.style.display = '';
        } else {
            if (itemNameText.includes(searchInput)) {
                itemName.classList.add('uppercase');
                item.style.display = '';
            } else {
                itemName.classList.remove('uppercase');
                item.style.display = 'none';
            }
        }
    }
}

// Fetch data for animes
fetch("json/animes.json")
    .then((response) => response.json())
    .then((myData) => {
        const animeItemsElement = document.getElementById('animeItems');
        if (animeItemsElement) {
            Object.keys(myData).forEach((animeKey) => {
                const anime = myData[animeKey];
                animeItemsElement.innerHTML += `
                    <div class="item">
                        <a href="${anime.page}">
                            <img src="${anime.img}" alt="${anime.title}">
                            <p class="name">${anime.title}</p>
                            <p class="episode">episodes: ${anime.episodes}</p>
                        </a>
                    </div>`;
            });
        }
    });

// Fetch data for movies
fetch("json/movies.json")
    .then((response) => response.json())
    .then((myData) => {
        const movieItemsElement = document.getElementById('movieItems');
        if (movieItemsElement) {
            Object.keys(myData).forEach((movieKey) => {
                const movie = myData[movieKey];
                movieItemsElement.innerHTML += `
                    <div class="item">
                        <a href="${movie.page}">
                            <img src="${movie.img}" alt="${movie.title}">
                            <p class="name">${movie.title}</p>
                        </a>
                    </div>`;
            });
        }
    });

// Login form
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            let username = loginForm.querySelector('input[type="text"]').value;
            let password = loginForm.querySelector('input[type="password"]').value;

            if (username === 'Admin' && password === 'Admin') {
                alert("Welcome Admin");
                window.location.href = 'landing-page.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }
});
