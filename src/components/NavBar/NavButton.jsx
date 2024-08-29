import React from 'react';
import './NavButton.css';

const NavButton = ( props ) => {

  return (
    <div className={`nav-button ${!props.isOpen ? 'disable-nav-button' : ''}`}>
        <img className={`${props.navigate === 1 ? 'disable-button disable-button-wh' : 'nav-button-up'}`} src={`${process.env.PUBLIC_URL}/assets/navbtn_up.png`} alt='navbtn' onClick={() => props.handleNavigate('goUp')}/>
        <img className={`${props.navigate === 5 ? 'disable-button disable-button-wh' : 'nav-button-down'}`} src={`${process.env.PUBLIC_URL}/assets/navbtn_down.png`} alt='navbtn' onClick={() => props.handleNavigate('goDown')}/>

        <img className={`mobile-view`} src={`${process.env.PUBLIC_URL}/assets/${props.isOpen ? 'navclose' : 'navopen'}.png`} alt='navopen' onClick={() => props.handleOpenNavbar()}/>

        {props.isOpen ? 
        <>
        <img className={`mobile-view ${props.navigate === 1 ? 'disable-button' : null}`} src={`${process.env.PUBLIC_URL}/assets/profile.png`} alt='profile' onClick={() => props.handleNavigate('navbar', 1)}/>
        <img className={`mobile-view ${props.navigate === 2 ? 'disable-button' : null}`} src={`${process.env.PUBLIC_URL}/assets/skills.png`} alt='skills' onClick={() => props.handleNavigate('navbar', 2)}/>
        <img className={`mobile-view ${props.navigate === 3 ? 'disable-button' : null}`} src={`${process.env.PUBLIC_URL}/assets/projects.png`} alt='projects' onClick={() => props.handleNavigate('navbar', 3)}/>
        <img className={`mobile-view ${props.navigate === 4 ? 'disable-button' : null}`} src={`${process.env.PUBLIC_URL}/assets/about.png`} alt='about' onClick={() => props.handleNavigate('navbar', 4)}/>
        <img className={`mobile-view ${props.navigate === 5 ? 'disable-button' : null}`} src={`${process.env.PUBLIC_URL}/assets/contact.png`} alt='contact' onClick={() => props.handleNavigate('navbar', 5)}/>
        </> : null}

    </div>
  )
}

export default NavButton;