import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Home from '../Home/Home';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Portfolio = ( props ) => {
  return (
    <>
    {
      props.navigate === 1 ? <><Home /></> : 
      props.navigate === 2 ? <><Skills /></> : 
      props.navigate === 3 ? <><Projects /></> : 
      props.navigate === 4 ? <><About /></> : 
      props.navigate === 5 ? <><Contact /></> : 
      null
    }
    </>
  )
}

export default Portfolio;