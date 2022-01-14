import propTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      notVisible: true,
      name: '',
    };
  }

  handleButton = () => {
    const { name } = this.state;
    const maxNumber = 2;
    if (name.length < maxNumber) {
      this.setState({ notVisible: true });
    } else {
      this.setState({ notVisible: false });
    }
  };

  handleName = ({ target }) => {
    this.setState({ name: target.value }, this.handleButton);
  };

  render() {
    const { name, notVisible } = this.state;
    return (
      <>
        <form>
          <input
            type="text"
            name="text"
            placeholder="Nome do Artista"
            data-testid="search-artist-input"
            onChange={ this.handleName }
            value={ name }
          />

          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ notVisible }
          >
            Pequisar
          </button>
        </form>
        <Header />
      </>
    );
  }
}

Search.propTypes = {
  name: propTypes.string,
}.isRequired;
