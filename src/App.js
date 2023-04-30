import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import './App.css';
import './MainContent.css';
import profilePicture from './assets/profile-Pic-tyjkot.jpg';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import MessageBoard from './redux/MessageBoard';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebaseConfig from './redux/firebase/firebaseConfig';

function App() {
  // loading spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // firebase for message board
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <Provider store={store}>
      <div className={`App ${loading ? 'loading' : ''}`}>
        {loading && <Spinner />}
        <div className={`main-content ${loading ? 'hidden' : 'visible'}`}>
          <div className="profile-picture-container">
            <img
              src={profilePicture}
              alt="tyjkot"
              className="profile-picture"
            />
          </div>
          <div className="buttons">
            <a
              href="https://twitter.com/tyjkot"
              target="_blank"
              rel="noopener noreferrer"
              className="button twitter"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://github.com/ttyyjjkkoott"
              target="_blank"
              rel="noopener noreferrer"
              className="button github"
            >
              <i className="fa fa-github"></i>
            </a>
            <a href="mailto:t@tyjkot.io" className="button email">
              <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://www.etsy.com/shop/QualityCrystalShopCo"
              target="_blank"
              rel="noopener noreferrer"
              className="button etsy"
            >
              <i className="fab fa-etsy"></i>
            </a>
          </div>
          <MessageBoard />
        </div>
      </div>
    </Provider>
  );
}

export default App;
