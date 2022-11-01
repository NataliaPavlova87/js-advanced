import './styles/index.scss';
import {Exel} from '@components/exel/Exel';
import {Header} from '@components/header/Header';

const exel = new Exel('#app', {
    components: [Header],
});

exel.render();

