import {DomListeners} from '@core/DomListeners';

export class ExelComponent extends DomListeners {
    constructor($root, options) {
        super($root, options);
    }

    init() {
        this.initDomListeners();
    }

    destroy() {
        this.removeEventsListeners();
    }
}
