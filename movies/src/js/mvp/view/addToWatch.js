export class AddToWatch {
    constructor() {
        this.movieList = document.getElementById('movie-list');
    }

    bindAddToWatched(handler) {
        this.movieList.addEventListener('click', e => {
            if (e.target.classList.contains('add-to-watched')) {
                const index = e.target.dataset.index;
                handler(parseInt(index));
            }
        })
    }

}