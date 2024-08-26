import React from 'react';
import './NavBar.css';

const NavBar = ( props ) => {
  return (
    <>
    <nav className='desktop-app-bar'>
        <span className='desktop-app-bar-title'>
          <i>P O R T F O L I O</i>
        </span>
        <div className='desktop-app-bar-list'>
            <span className={`desktop-app-bar-navbtn make-hand ${props.navigate === 1 ? 'option-selected' : null}`} onClick={() => props.handleNavigate('navbar', 1)}>Home</span>
            <span className={`desktop-app-bar-navbtn make-hand ${props.navigate === 2 ? 'option-selected' : null}`} onClick={() => props.handleNavigate('navbar', 2)}>Skills</span>
            <span className={`desktop-app-bar-navbtn make-hand ${props.navigate === 3 ? 'option-selected' : null}`} onClick={() => props.handleNavigate('navbar', 3)}>Projects</span>
            <span className={`desktop-app-bar-navbtn make-hand ${props.navigate === 4 ? 'option-selected' : null}`} onClick={() => props.handleNavigate('navbar', 4)}>About</span>
            <span className={`desktop-app-bar-navbtn make-hand ${props.navigate === 5 ? 'option-selected' : null}`} onClick={() => props.handleNavigate('navbar', 5)}>Contact</span>
        </div>
    </nav>
    </>
  )
}

export default NavBar;