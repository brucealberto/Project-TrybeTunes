import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <header data-testid="header-component">
          <h1>Oi Cabeçalho</h1>
        </header>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      </BrowserRouter>
    );
  }
}
