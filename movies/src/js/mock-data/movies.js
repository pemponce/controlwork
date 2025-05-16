import { MovieModel } from '../model/model.js';
import { MovieView } from '../view/view.js';
import { MoviePresenter } from '../presenter/presenter.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new MovieModel();
    const view = new MovieView();
    const presenter = new MoviePresenter(model, view);
});
