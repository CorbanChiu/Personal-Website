import React, { useState } from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Space+Mono' rel='stylesheet'></link>
      </head>
      <div className="site-title">Corban Chiu</div>
      <ul>
        <li>
          <a href="https://drive.google.com/file/d/1h5JyJ79adEhlFB78jA4Eq7OWf3uw1HQw/view?usp=share_link" target="_blank">Resume</a>
        </li>
        <li className='img-logos'>
          <a href="https://github.com/CorbanChiu" target="_blank"><img src={"GitHubLogo.png"} width={23}></img></a>
        </li>
        <li className='img-logos'>
          <a href="https://www.linkedin.com/in/corban-chiu-90a655209/" target="_blank"><img src={"LinkedInLogo.png"} width={23}></img></a>
        </li>
      </ul>
    </nav >
  )
}

export default NavBar
