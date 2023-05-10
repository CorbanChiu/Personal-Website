import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Space+Mono' rel='stylesheet'></link>
      </head>
      <Link to="/" className="site-title">Corban Chiu</Link>
      <ul>
        {/* <PageLink to="/About">About</PageLink> */}
        {/* <PageLink to="/Projects">Projects</PageLink> */}
        <li>
          <Link to="https://drive.google.com/file/d/1h5JyJ79adEhlFB78jA4Eq7OWf3uw1HQw/view?usp=share_link" target="_blank">Resume</Link>
        </li>
        {/* <PageLink to="/Resume">Resume</PageLink> */}
        {/* <PageLink to="/Contact">Contact</PageLink> */}
        <li className='img-logos'>
          <Link to="https://github.com/CorbanChiu" target="_blank"><img src={"GitHubLogo.png"} width={23}></img></Link>
        </li>
        <li className='img-logos'>
          <Link to="https://www.linkedin.com/in/corban-chiu-90a655209/" target="_blank"><img src={"LinkedInLogo.png"} width={23}></img></Link>
        </li>
      </ul>
    </nav >
  )
}

function PageLink({ to, children, ...props }) {
  return (
    <li>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default NavBar
