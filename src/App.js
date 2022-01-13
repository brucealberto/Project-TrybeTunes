import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <Route path="/album/:id">
          <div data-testid="page-album">
            <Album />
          </div>
        </Route>

        <Route path="/">
          <div data-testid="page-login">
            <Login />
          </div>
        </Route>

        <Route path="/search">
          <div data-testid="page-search">
            <Search />
          </div>
        </Route>

        <Route path="/favorites">
          <div data-testid="page-favorites">
            <Favorites />
          </div>
        </Route>

        <Route path="/profile">
          <div data-testid="page-profile">
            <Profile />
          </div>
        </Route>

        <Route path="/profile/edit">
          <div data-testid="page-profile-edit">
            <ProfileEdit />
          </div>
        </Route>

        <Route path="*">
          <div data-testid="page-not-found">
            <NotFound />
          </div>
        </Route>

      </BrowserRouter>
    );
  }
}

export default App;
