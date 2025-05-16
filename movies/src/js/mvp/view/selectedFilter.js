export class SelectedFilter {
    constructor() {
        this.statusFilter = document.getElementsByName('status-filter');
    }


    getSelectedFilter() {
        const selected = [...this.statusFilter].find(r => r.checked);
        return selected?.value || 'all';
    }

}