import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      notVisible: true,
      load: false,
      userValid: false,
    };
  }

  componentWillUnmount() {
    this.setState(() => {});
  }

  handleChange = ({ target }) => {
    this.setState({ name: target.value }, () => this.validText());
  };

  validText = () => {
    const { name } = this.state;
    const maxNumber = 3;
    if (name.length < maxNumber) {
      this.setState({ notVisible: true });
    } else {
      this.setState({ notVisible: false });
    }
  };

  callApi = () => {
    const { name } = this.state;
    this.setState({ load: true }, async () => {
      await createUser({ name });
      this.setState({ load: false, userValid: true });
    });
  };

  render() {
    const { name, notVisible, load, userValid } = this.state;
    return (
      <div>

        {userValid && <Redirect to="/search" />}
        {load ? (
          <Loading />
        ) : (
          <form>
            <label htmlFor="nome">
              <input
                type="text"
                name="text"
                data-testid="login-name-input"
                id="nome"
                placeholder="Nome"
                value={ name }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              name="button"
              data-testid="login-submit-button"
              onClick={ this.callApi }
              disabled={ notVisible }
            >
              Entrar
            </button>
          </form>

        )}
      </div>
    );
  }
}

Login.propTypes = {
  name: propTypes.string,
}.isRequired;
