import propTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class MusicCard extends Component {
  constructor(props) {
    super(props);
    const { music, checked } = props;
    this.state = {
      favoriteSong: checked[0].some(({ trackId }) => trackId === music.trackId),
      isLoading: false,
    };
  }

  callApi = async () => {
    this.setState({ isLoading: true });
    const { music } = this.props;
    await addSong(music);
    this.setState((prevState) => ({
      favoriteSong: !prevState.favoriteSong,
      isLoading: false,
    }));
  };

  render() {
    const { music } = this.props;
    const { favoriteSong, isLoading } = this.state;
    return (
      <div>
        {isLoading && <Loading />}
        <label htmlFor={ music.trackId }>
          <p>Favorita</p>
          <input
            type="checkbox"
            id={ music.trackId }
            data-testid={ `checkbox-music-${music.trackId}` }
            onChange={ this.callApi }
            checked={ favoriteSong }
          />
        </label>
      </div>
    );
  }
}
MusicCard.propTypes = {
  music: propTypes.objectOf,
}.isRequired;
