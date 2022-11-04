import {capitalaze} from '@utils/capitalaze';
import {getMethodListenerName} from '@utils/getMethodListenerName';

export class DomListeners {
    constructor($root, options) {
        this.$root = $root;

        if (!$root) {
            throw new Error('$root не существует');
        }

        this.options = options.listeners;
        this.name = options.name;
    }

    initDomListeners() {
        this.options.forEach((listener) => {
            const method = getMethodListenerName(capitalaze(listener));
            if (!this[method]) {
                throw new Error(
                    `Метода ${method} не существует в компоненте ${this.name}`
                );
            }
            this[method] = this[method].bind(this);
            this.$root.on(listener, this[method].bind(this));
        });
    }

    removeEventsListeners() {
        this.options.forEach((listener) => {
            const method = getMethodListenerName(capitalaze(listener));
            if (!this[method]) {
                throw new Error(
                    `Метода ${method} не существует в компоненте ${this.name}`
                );
            }
            this.$root.removeEvents(listener, this[method]);
        });
    }
}
