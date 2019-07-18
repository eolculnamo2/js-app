import { createContext } from 'react';
import mainState from './mainState';

const MainContext = createContext<any>(mainState);

export default MainContext;
