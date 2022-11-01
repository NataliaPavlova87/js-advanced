import {ExelComponent} from '@core/ExelComponent';

export class Header extends ExelComponent {
    static className = 'exel__header';

    toHtml() {
        return `<h1>Header</h1>`;
    }
}
