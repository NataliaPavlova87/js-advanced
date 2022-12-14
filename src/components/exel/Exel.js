import {$} from '@utils/dom';

export class Exel {
    constructor(selector, options) {
        this.selector = document.querySelector(selector);
        this.components = options.components ?? [];
    }

    createApp() {
        const dom = $();
        const root = dom.create('div', ['exel']);

        this.components = this.components.map((Component) => {
            const el = dom.create('div', Component.className);
            const component = new Component(el);
            el.html(component.toHtml());
            root.append(el);
            return component;
        });

        return root.el;
    }

    render() {
        this.selector.append(this.createApp());

        this.components.forEach((Component) => {
            Component.init();
        });
    }
}
