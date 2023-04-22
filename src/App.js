import React from 'react';
import './App.css';
import profilePicture from './assets/profilePic.jpg';


function App() {
  return (
    <div className="App">
      <img
        src={profilePicture}
        alt="tyjkot profile picture"
        className="profile-picture"
      />
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
        <a
          href="mailto:t@tyjkot.io"
          className="button email"
        >
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
