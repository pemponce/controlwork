export class RenderMovies {
    constructor() {
        this.movieList = document.getElementById('movie-list');
    }

    renderMovies(movies) {
        this.movieList.innerHTML = '';
        movies.forEach((movie, index) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
            <h3>${movie.title}</h3>
            <p>Статус: <strong>${movie.watched ? 'Просмотрен 👁️' : 'Не просмотрен❗❗❗'}</strong></p>
            <button class="favorite-toggle" data-index="${index}">
                ${movie.favorite ? '⭐ Избранное' : '🤩 Добавить в избранное'}
            </button>
            <button class="add-to-watched" data-index="${index}">
                ${movie.favorite ? '👁️ просмотрено' : '✅ добавить в просмотренное'}
            </button>
            <button class="delete-button" data-index="${index}">Удалить</button>
        `;
            this.movieList.appendChild(card);
        });
    }

}