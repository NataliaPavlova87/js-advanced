import {ExelComponent} from '@core/ExelComponent';

export class Header extends ExelComponent {
    static className = 'exel__header';

    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: [],
        });
    }

    toHtml() {
        return `<h1>Header</h1>`;
    }
}
