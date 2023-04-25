import React, { useEffect } from 'react';
import './Login.css';
import CredentialsNav from './CredentialsNav';
import { Link } from 'react-router-dom';

const Login = ({
  signIn,
  isEmpty,
  setIsEmpty,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword
}) => {
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmpty(event.target.value === '');
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleNextClick = (event) => {
    event.preventDefault();
    setShowPassword(true);
    console.log(`This is your email: ${email}`)
  }

  const handleSignInClick = (event) => {
    // TODO: Implement sign in logic
    signIn(event);
    console.log(`This is your password: ${password}`)
  }

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <section id="login">
      <CredentialsNav />
      <div className="container">
        <div className="row">
          <div className="row__column">
            <div className="login__info">
              <h1>Sign In</h1>
              <form action="" className="login__form">
                {showPassword ? (
                  <div className="login__form--field">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handlePasswordChange}
                      value={password}
                    />
                  </div>
                ) : (
                  <div className="login__form--field">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleEmailChange}
                      value={email}
                    />
                  </div>
                )}
                {showPassword ? (
                  <button
                    className={`btn login__form--btn ${password === '' ? 'frosted no-cursor' : ''}`}
                    onClick={handleSignInClick}
                    disabled={password === ''}
                  >
                    Sign In
                  </button>
                ) : (
                  <button
                    className={`btn login__form--btn ${isEmpty ? 'frosted no-cursor' : ''}`}
                    onClick={handleNextClick}
                    disabled={isEmpty}
                  >
                    Next
                  </button>
                )}
              </form>
              <a href="https://www.tesla.com/support/account-support?redirect=no" target="_blank" className="href">Trouble Signing In?</a>
              <span>Or</span>
              <Link to="/signup" className="btn__wrapper">
                <button className="btn login__btn--create">
                  Create Account
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
