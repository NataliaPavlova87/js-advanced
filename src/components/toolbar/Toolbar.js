import {ExelComponent} from '@core/ExelComponent';

export class Toolbar extends ExelComponent {
    static className = 'exel__toolbar';

    toHtml() {
        return `<h1>Toolbar</h1>`;
    }
}
