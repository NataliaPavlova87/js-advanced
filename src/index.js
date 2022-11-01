import './styles/index.scss';
import {Exel} from '@components/exel/Exel';
import {Header} from '@components/header/Header';
import {Toolbar} from '@components/toolbar/Toolbar';

const exel = new Exel('#app', {
    components: [Header, Toolbar],
});

exel.render();

