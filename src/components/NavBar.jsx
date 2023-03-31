import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">Corban Chiu</Link>
      <ul>
        <PageLink to="/About">About</PageLink>
        <PageLink to="/Projects">Projects</PageLink>
        <PageLink to="/Resume">Resume</PageLink>
        <PageLink to="/Contact">Contact</PageLink>
        <li>
          <Link to="https://github.com/CorbanChiu" target="_blank"><img src={"GitHubLogo.png"} width={20}></img></Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/corban-chiu-90a655209/" target="_blank"><img src={"LinkedInLogo.png"} width={20}></img></Link>
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
