import { BrowserRouter } from 'react-router-dom';
import { Routes } from '../Routes';

import './App.sass';

export const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
