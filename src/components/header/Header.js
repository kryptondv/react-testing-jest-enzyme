import React from 'react';
import './styles.scss';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header-component">
      <div className="wrap">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="logo"/>
        </div>
      </div>
    </header>
  );
}

export default Header;