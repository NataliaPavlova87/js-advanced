import {ExelComponent} from '@core/ExelComponent';

export class Toolbar extends ExelComponent {
    static className = 'exel__toolbar';

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['input'],
        });
    }

    onInput(event) {
        console.log(event.target.value);
    }

    toHtml() {
        return `<input value="" />`;
    }
}
