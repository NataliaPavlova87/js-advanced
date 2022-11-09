import {ExelComponent} from '@core/ExelComponent';
import {createTable} from './template';
import {CHAR_CODE} from '@constants/charCode';

export class Table extends ExelComponent {
    static className = ['exel__table', 'table'];

    constructor($root) {
        super($root, {
            name: 'Table',
            listeners: [],
        });
    }

    toHtml() {
        const columnCount = CHAR_CODE.Z - CHAR_CODE.A + 1;

        return createTable(columnCount);
    }
}
