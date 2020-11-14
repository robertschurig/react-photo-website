import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

import './index.sass';

export const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
