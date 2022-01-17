/* eslint-disable react/jsx-closing-tag-location */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  constructor() {
    super();

    this.state = {
      getApiMusic: [],
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const getMusic = await getMusics(id);
    this.setState({ getApiMusic: [...getMusic] });
  };

  render() {
    const { getApiMusic } = this.state;
    return (
      <div>
        <Header />
        { getApiMusic.map((musics, index) => (index === 0 ? (
          <div>
            <h2 data-testid="artist-name">{musics.artistName}</h2>
            <h2 data-testid="album-name">{musics.collectionName}</h2>
          </div>
        ) : (
          <div key={ musics.trackName }>
            <h3>{musics.trackName}</h3>
            <audio
              data-testid="audio-component"
              src={ musics.previewUrl }
              controls
            >
              <track kind="captions" />
              O seu navegador não suporta o
              elemento
              <code>audio</code>
              .
            </audio>
          </div>
        ))) }
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.string.isRequired,
};
