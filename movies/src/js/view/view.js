export class MovieView {
    constructor() {
        this.form = document.getElementById('movie-form');
        this.titleInput = document.getElementById('movie-title');
        this.statusInput = document.getElementById('movie-status');
        this.movieList = document.getElementById('movie-list');
        this.statusFilter = document.getElementsByName('status-filter');
        this.favoriteFilter = document.getElementById('favorite-filter');
    }

    bindAddMovie(handler) {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            const title = this.titleInput.value.trim();
            const watched = this.statusInput.checked;
            if (title) {
                handler(title, watched);
                this.form.reset();
            }
        });
    }

    bindFilterChange(handler) {
        [...this.statusFilter].forEach(radio =>
            radio.addEventListener('change', handler)
        );
        this.favoriteFilter.addEventListener('change', handler);
    }

    bindFavoriteToggle(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('favorite-toggle')) {
                const index = e.target.dataset.index;
                handler(parseInt(index));
            }
        });
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


    bindDeleteMovie(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('delete-button')) {
                const index = e.target.dataset.index;
                handler(parseInt(index));
            }
        });
    }

    bindAddToWatched(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('add-to-watched')) {
                const index = e.target.dataset.index;
                handler(parseInt(index));
            }
        })
    }

    getSelectedFilter() {
        const selected = [...this.statusFilter].find(r => r.checked);
        return selected?.value || 'all';
    }

    isFavoriteOnly() {
        return this.favoriteFilter.checked;
    }
}
