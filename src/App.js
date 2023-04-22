import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import './App.css';
import './MainContent.css';
import profilePicture from './assets/profilePic.jpg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`App ${loading ? 'loading' : ''}`}>
      {loading && <Spinner />}
      <div className={`main-content ${loading ? 'hidden' : 'visible'}`}>
        <div className="profile-picture-container">
          <img
            src={profilePicture}
            alt="tyjkot profile picture"
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
        </div>
      </div>
    </div>
  );
}

export default App;
