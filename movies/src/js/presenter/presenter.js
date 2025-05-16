export class MoviePresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddMovie(this.handleAddMovie);
        this.view.bindFilterChange(this.handleFilterChange);
        this.view.bindFavoriteToggle(this.handleFavoriteToggle);
        this.view.bindDeleteMovie(this.handleDeleteMovie);
        this.view.bindAddToWatched(this.handleAddToWatched);

        this.updateView();
    }

    handleDeleteMovie = (index) => {
        this.model.deleteMovie(index);
        this.updateView();
    };

    handleAddToWatched = (index) => {
        this.model.addToWatched(index);
        this.updateView();
    }

    handleAddMovie = (title, watched) => {
        this.model.addMovie(title, watched);
        this.updateView();
    };

    handleFilterChange = () => {
        this.updateView();
    };

    handleFavoriteToggle = (index) => {
        this.model.toggleFavorite(index);
        this.updateView();
    };

    updateView = () => {
        const filter = this.view.getSelectedFilter();
        const favoriteOnly = this.view.isFavoriteOnly();
        const movies = this.model.getMovies(filter, favoriteOnly);
        this.view.renderMovies(movies);
    };


}
