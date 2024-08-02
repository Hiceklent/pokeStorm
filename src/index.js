import './styles/main.scss';
import { getPokes } from './config/api-controller.js';

import { createHome } from './pages/home/home';
const listaPokemons = await getPokes();

createHome(listaPokemons);

