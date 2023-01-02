import logo from './poap.svg';
import './App.css';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import {
  faYoutube,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCJJ9qkofalVW5wi83ktE6kg"
          target="_blank"
          rel="noopener noreferrer"
        >
          No Movies in Hell

        </a>
   
      
      
    <div class="social-container">
      <p> Visit our Socials </p>
      <a href="https://www.youtube.com/channel/UCJJ9qkofalVW5wi83ktE6kg"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.twitter.com/movies_hell" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/nomoviesinhell"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
</div>

  </header>
    </div>
  );
}

export default App;
