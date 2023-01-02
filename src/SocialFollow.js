import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Social Follow</h3>
    </div>
  );
}


<div class="social-container">
      <h3> Our Socials </h3>
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

