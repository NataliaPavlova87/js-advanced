import {getCharCode} from '@utils/getCharCode';
import {CHAR_CODE} from '@constants/charCode';

function createRow(content, rowCount = '') {
    return `<div class="table__row row">
                <div class="row__info row-info">${rowCount}</div>
                <div class="row__info row-data">${content}</div>    
            </div>`;
}

function createColumn(content = '', className = '') {
    return `<div class="table_col col ${className}">${content}</div>`;
}

export function createTable(columnCount, rowCount = 15) {
    const firstColumns = new Array(columnCount)
        .fill('')
        .map((el, index) => createColumn(getCharCode(CHAR_CODE.A + index), 'col--first'))
        .join(' ');

    const columns = new Array(columnCount)
        .fill('')
        .map((el, index) => createColumn())
        .join(' ');

    const rows = new Array(rowCount)
        .fill('')
        .map((el, index) => createRow(columns, String(index)))
        .join(' ');

    const firstRow = createRow(firstColumns);

    return `${firstRow}${rows}`;
}
