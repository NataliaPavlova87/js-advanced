import {appendDom} from '@utils/dom';

export class Exel {
    constructor(selector, options) {
        this.selector = selector;
        this.components = options.components ?? [];
    }

    createApp() {
        const app = document.querySelector(this.selector);
        app.append(appendDom('div', 'exel'));
    }
}
