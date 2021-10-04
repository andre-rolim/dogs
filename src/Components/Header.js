import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Dogs } from '../Assets/dogs.svg';
import { UserContext } from '../userContext';
import { ReactComponent as AdicionarFotos } from '../Assets/adicionar.svg';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
        {data ? (
          <Link to="/conta/postar" className={styles.postar}>
            <AdicionarFotos />
          </Link>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
