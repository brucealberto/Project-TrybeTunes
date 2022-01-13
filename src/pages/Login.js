import React, { Component } from 'react';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      // name: '',
    };
  }

  render() {
    const validButton = (event) => {
      event.preventDefault();
      this.setState();
      console.log(event.target);
    };
    return (
      <div>
        <form>
          <label htmlFor="nome">
            <input
              type="text"
              data-testid="login-name-input"
              id="nome"
              placeholder="Nome"
            />
          </label>
          <button
            type="submit"
            data-testid="login-submit-button"
            onClick={ validButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
