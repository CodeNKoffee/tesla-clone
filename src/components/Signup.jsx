import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import CredentialsNav from './CredentialsNav';
import userSlice, { login, selectUser } from '../features/userSlice';
import { auth } from '../firebase/init';
import './Signup.css';
import {
  createUserWithEmailAndPassword
} from 'firebase/auth';

const Signup = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setIsEmpty(event.target.value === '' || firstName === '' || lastName === '');
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setIsEmpty(event.target.value === '' || firstName === '' || lastName === '');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsEmpty(event.target.value === '' || email === '' || password === '' || confirmPassword === '');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setIsEmpty(event.target.value === '' || email === '' || password === '' || confirmPassword === '');
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }
  

  const handleNextClick = (event) => {
    event.preventDefault();
    setShowPassword(true);
    console.log(firstName, lastName)
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    (password === confirmPassword) ? (
      createUserWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
          userAuth.user.updateProfile({
            displayName: firstName,
          })
          .then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: firstName,
            }))
            history.push('teslaaccount')
          })
        })
        .catch((error) => alert(error.message))
    ) : (
      console.log("error.message")
    )
    // Dispatch action to sign up the user
  };

  return (
    <section id="login">
      <CredentialsNav />
      <div className="container">
        <div className="row">
          <div className="row__column">
            <div className="login__info">
              <h1>Create Account</h1>
              <form action="" className="login__form">
                {showPassword ? (
                  <>
                    <div className="login__form--field">
                      <label htmlFor="email">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    </div>
                    <div className="login__form--field">
                      <label htmlFor="password">Password</label>
                      <input
                        required
                        type="password"
                        name="password"
                        onChange={handlePasswordChange}
                        value={password}
                        className={isInvalidPassword && "invalid"}
                      />
                    </div>
                    <div className="login__form--field">
                      <label htmlFor="password">Confirm Password</label>
                      <input
                        required
                        type="password"
                        name="confirmPassword"
                        onChange={handleConfirmPasswordChange}
                        value={confirmPassword}
                        className={isInvalidPassword && "invalid"}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="login__form--field">
                      <label htmlFor="text">First Name</label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        onChange={handleFirstNameChange}
                        value={firstName}
                      />
                    </div>
                    <div className="login__form--field">
                      <label htmlFor="text">Last Name</label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        onChange={handleLastNameChange}
                        value={lastName}
                      />
                    </div>
                  </>
                )}
                {showPassword ? (
                  <button
                    className={
                      `btn login__form--btn ${(
                        password === '' || confirmPassword === '' || email === ''
                      ) ? 'frosted no-cursor' : ''}`
                    }
                    onClick={handleSignUpClick}
                    disabled={password === ''}
                  >
                    Create Account
                  </button>
                ) : (
                  <button
                    className={
                      `btn login__form--btn ${isEmpty ? 'frosted no-cursor' : ''}`
                    }
                    onClick={handleNextClick}
                    disabled={isEmpty}
                  >
                    Next
                  </button>
                )}
              </form>
              <span>Or</span>
              <Link to="/login" className="btn__wrapper">
                <button className="btn login__btn--create">
                  Sign In
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
