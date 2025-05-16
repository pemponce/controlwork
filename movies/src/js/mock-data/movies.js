import {MovieModel} from '../mvp/model/model.js';
import {MoviePresenter} from '../mvp/presenter/presenter.js';
import {AddMovie} from "../mvp/view/addMovie.js";
import {AddToWatch} from "../mvp/view/addToWatch.js";
import {DeleteMovie} from "../mvp/view/deleteMovie.js";
import {FavoriteMovie} from "../mvp/view/favoriteMovie.js";
import {FilterChange} from "../mvp/view/filterChange.js";
import {RenderMovies} from "../mvp/view/renderMovies.js";
import {SelectedFilter} from "../mvp/view/selectedFilter.js";

document.addEventListener('DOMContentLoaded', () => {
    const model = new MovieModel();
    const addMovie = new AddMovie();
    const addToWatch = new AddToWatch();
    const deleteMovie = new DeleteMovie();
    const favoriteMovie = new FavoriteMovie();
    const filterChange = new FilterChange();
    const renderMovie = new RenderMovies();
    const selectedFilter = new SelectedFilter();
    const presenter = new MoviePresenter(model, addMovie, addToWatch, favoriteMovie
        , deleteMovie, filterChange, renderMovie, selectedFilter);
    presenter.initialize();
});
