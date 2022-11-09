import './styles/index.scss';
import {Exel} from '@components/exel/Exel';
import {Table} from '@components/table/Table';

const exel = new Exel('#app', {
    components: [Table],
});

exel.render();

