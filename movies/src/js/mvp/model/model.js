export class MovieModel {
    constructor() {
        this.movies = [];
    }

    addMovie(title, watched) {
        this.movies.push({
            title,
            watched,
            favorite: false
        });
    }

    getMovies(filter = 'all', favoriteOnly = false) {
        return this.movies.filter(movie => {
            const matchStatus = filter === 'all' ||
                (filter === 'watched' && movie.watched) ||
                (filter === 'unwatched' && !movie.watched);
            const matchFavorite = !favoriteOnly || movie.favorite;
            return matchStatus && matchFavorite;
        });
    }

    toggleFavorite(index) {
        if (this.movies[index]) {
            this.movies[index].favorite = !this.movies[index].favorite;
        }
    }

    deleteMovie(index) {
        if (index >= 0 && index < this.movies.length) {
            this.movies.splice(index, 1);
        }
    }

    addToWatched(index) {
        const movie = this.movies.at(index);
        movie.watched = !movie.watched;
    }

}
