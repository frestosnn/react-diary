import { useSyncExternalStore } from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Личный дневник</h1>
      <hr className="header__line" />
    </header>
  );
}

export default Header;
