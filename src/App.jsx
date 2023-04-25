import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/init';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import TeslaAccount from './components/TeslaAccount';


function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
        }))
        history.push('/teslaaccount')
      })
      .catch((error) => alert(error.message))
  }

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <Landing />
          </Route>
          <Route exact path="/login">
            {user ? (
                <Redirect to="/teslaaccount" />
              ) : (
                <Login
                  signIn={signIn}
                  isEmpty={isEmpty}
                  setIsEmpty={setIsEmpty}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
              )
            }
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/teslaaccount">
            {!user ?  (
              <Redirect to="login" />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
