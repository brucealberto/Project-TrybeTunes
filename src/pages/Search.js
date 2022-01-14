import propTypes from 'prop-types';
import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    const { name } = this.props;
    // catchRequisition = async() => {
    //   const catchApi = fetch(searchAlbumAPI);
    // }
    return (
      <form>
        <input
          type="text"
          placeholder="Nome do Artista"
          data-testid="search-artist-input"
          value={ name }
        />

        <button type="button" data-testid="search-artist-button">Pequisar</button>
      </form>

    );
  }
}

Search.propTypes = {
  name: propTypes.string,
}.isRequired;
