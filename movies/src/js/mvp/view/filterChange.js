export class FilterChange {

    constructor() {
        this.statusFilter = document.getElementsByName('status-filter');
        this.favoriteFilter = document.getElementById('favorite-filter');
    }

    bindFilterChange(handler) {
        [...this.statusFilter].forEach(radio =>
            radio.addEventListener('change', handler)
        );
        this.favoriteFilter.addEventListener('change', handler);
    }

}