import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './navbar/navbar';
import { Hamburger } from './hamburger/hamburger';

import styles from './header.module.css';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.brand}>
        <h1>
          <Link className={styles.brandlink} to="/">
            Robert Schurig
          </Link>
        </h1>
        <Hamburger isActive={isActive} onClick={() => setIsActive(!isActive)} />
      </div>
      <NavBar isActive={isActive} onItemClick={() => setIsActive(false)} />
    </header>
  );
};
