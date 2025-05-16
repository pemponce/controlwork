export class AddMovie {
    constructor() {
        this.form = document.getElementById('movie-form');
        this.titleInput = document.getElementById('movie-title');
        this.statusInput = document.getElementById('movie-status');

        console.log('AddMovie constructor:', {
            form: this.form,
            title: this.titleInput,
            status: this.statusInput
        });
    }

    bindAddMovie(handler) {
        if (!this.form) {
            console.error('form is null in bindAddMovie');
            return;
        }

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
}
