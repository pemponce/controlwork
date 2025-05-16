export class MoviePresenter {
    constructor(model, addMovie, addToWatch, favoriteMovie, deleteMovie, filterChange, renderMovies, selectedFilter) {
        this.model = model;
        this.addMovie = addMovie;
        this.addToWatch = addToWatch;
        this.favoriteMovie = favoriteMovie;
        this.deleteMovie = deleteMovie;
        this.filterChange = filterChange;
        this.renderMovies = renderMovies;
        this.selectedFilter = selectedFilter;
    }

    initialize() {
        this.addMovie.bindAddMovie(this.handleAddMovie);
        this.addToWatch.bindAddToWatched(this.handleAddToWatched);
        this.favoriteMovie.bindFavoriteToggle(this.handleFavoriteToggle);
        this.deleteMovie.bindDeleteMovie(this.handleDeleteMovie);
        this.filterChange.bindFilterChange(this.handleFilterChange);

        this.updateView();
    }

    handleAddMovie = (title, watched) => {
        this.model.addMovie(title, watched);
        this.updateView();
    };

    handleAddToWatched = (index) => {
        this.model.addToWatched(index);
        this.updateView();
    };

    handleFavoriteToggle = (index) => {
        this.model.toggleFavorite(index);
        this.updateView();
    };

    handleDeleteMovie = (index) => {
        this.model.deleteMovie(index);
        this.updateView();
    };

    handleFilterChange = () => {
        this.updateView();
    };

    updateView = () => {
        const filter = this.selectedFilter.getSelectedFilter();
        const favoriteOnly = this.selectedFilter.isFavoriteOnly?.() ?? false;
        const movies = this.model.getMovies(filter, favoriteOnly);
        this.renderMovies.renderMovies(movies);
    };
}
