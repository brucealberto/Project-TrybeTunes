import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      notVisible: true,
      name: '',
      moment: '',
      getArtistAlbuns: [],
      prevArtist: '',
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

  handleClick = async () => {
    this.setState((prevState) => ({
      moment: 'loading',
      name: '',
      prevArtist: prevState.name,
      // prevState faz uma cópia do estado com o valor antes do setState ou seja ante de alterar
    }));
    // cada coisinha que muda é o estado alterando ex (a) é um estado , (aaa) é a mudança do estado, e não o valor de input
    // depois que controla o componente controlado, ai cada alteração do input vira um estado novo
    const { name } = this.state;
    const getArtistApi = await searchAlbumsAPI(name);
    if (getArtistApi.length === 0) this.setState({ moment: 'Erro' });
    // getArtist.length === 0 retorna falso, pois é um array vazio , '0' == false, significa que o array tá vazio
    else { this.setState({ getArtistAlbuns: getArtistApi, moment: 'renderArtist' }); }
  };

  render() {
    const { name, notVisible, moment, getArtistAlbuns, prevArtist } = this.state;
    return (
      <>
        <Header />
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
            onClick={ this.handleClick }
            disabled={ notVisible }
          >
            Pequisar
          </button>
        </form>
        {moment === 'loading' && <Loading />}
        {moment === 'Erro' && <p>Nenhum álbum foi encontrado</p>}
        {/*  se getArtistAlbuns.length > 0 quer dizer que me retorne o quando o array for populado */}
        {moment === 'renderArtist' && (
          <div>
            <p>
              Resultado de álbuns de:
              {' '}
              {prevArtist}
            </p>
            {getArtistAlbuns.map(
              ({ collectionId, artistName, collectionName, artworkUrl100 }) => (
                <div key={ collectionId }>
                  <p>{artistName}</p>
                  <p>{collectionName}</p>
                  <img src={ artworkUrl100 } alt={ collectionName } />
                  <Link
                    to={ `/album/${collectionId}` }
                    data-testid={ `link-to-album-${collectionId}` }
                  >
                    Coleção
                  </Link>
                </div>
              ),
            )}
          </div>
        )}
      </>
    );
  }
}

Search.propTypes = {
  name: propTypes.string,
}.isRequired;
