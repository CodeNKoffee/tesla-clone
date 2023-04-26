import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Landing from './components/Landing';
import LandingTitles from './components/ui/LandingTitles';
import LandingBtns from './components/ui/LandingBtns';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase/init';
import TeslaAccount from './components/TeslaAccount';
import Loader from './components/ui/Loader';


function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged((userAuth) => {
      setLoading(false);
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
            <Landing user={user} />
            <LandingTitles />
            <LandingBtns />
          </Route>
          <Route exact path="/login">
          {loading ? (
            <Loader />
          ) : (
            user ? (
              <Redirect to="/teslaaccount" />
            ) : (
              <Login />
            )
          )}
          </Route>
          <Route exact path="/signup">
            <Signup user={user} />
          </Route>
          <Route exact path="/teslaaccount">
            {loading ? (
              <Loader />
            ) : (
              !user ?  (
                <Redirect to="login" />
              ) : (
                <>
                  <TeslaAccount
                    user={user}
                    isMenuOpen={isMenuOpen}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                  {isMenuOpen && <Menu />}
                </>
              )
            )}
          </Route>
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
