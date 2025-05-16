export class DeleteMovie {
    constructor() {
        this.movieList = document.getElementById('movie-list');
    }
    bindDeleteMovie(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('delete-button')) {
                const index = e.target.dataset.index;
                handler(parseInt(index));
            }
        });
    }
}