import React from 'react';
import './Nav.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/init';
import { logout } from '../features/userSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const AccountSubNav = ({ user, isMenuOpen }) => {

  const dispatch = useDispatch()
  const history = useHistory();

  const logoutOfApp = () => {
    auth.signOut()
      .then(() => {
        dispatch(logout())
        history.push('/')
      })
      .catch((error) => alert(error.message))
  }

  return (
      <nav>
        <div id="sub__nav--container" className="nav__container">
          <h3>
            {user?.displayName + "'s Tesla"}
          </h3>
          <ul className="nav__links">
            <li className="nav__list">
              <Link to="/teslaaccount"
                className={isMenuOpen ?
                  "nav__link--hidden" : "nav__link"
                }
              >
                Dashboard
              </Link>
            </li>
            <li className="nav__list">
              <Switch>
                <Route>
                  <Link to="/teslaaccount/profile-settings"
                    className={isMenuOpen ?
                      "nav__link--hidden" : "nav__link"
                    }
                  >
                    Profile Settings
                  </Link>
                </Route>
              </Switch>
            </li>
            <li className="nav__list">
              <Link to=""
                onClick={logoutOfApp}
                className={isMenuOpen ?
                  "nav__link--hidden" : "nav__link"
                }
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default AccountSubNav;
