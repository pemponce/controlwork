export class FavoriteMovie {
    constructor() {
        this.movieList = document.getElementById('movie-list');
        this.favoriteFilter = document.getElementById('favorite-filter');

    }


    bindFavoriteToggle(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('favorite-toggle')) {
                const index = e.target.dataset.index;
                handler(parseInt(index));
            }
        });
    }

    isFavoriteOnly() {
        return this.favoriteFilter.checked;
    }
}