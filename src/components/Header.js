import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      load: false,
      user: {},
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = async () => {
    this.setState({ load: true });
    const user = await getUser();
    this.setState({ user, load: false });
  }

  render() {
    const { user, load } = this.state;
    return (
      <>
        {load && <Loading />}
        <header data-testid="header-component">
          <h1 data-testid="header-user-name">{user.name}</h1>
        </header>
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
      </>
    );
  }
}
