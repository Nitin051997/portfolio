import './App.css';
import NavBar from "./components/NavBar/NavBar";
import NavButton from './components/NavBar/NavButton';
import Portfolio from "./components/App/Portfolio";
import { useState } from 'react';

function App() {

  const [navigate, setNavigate] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNavbar = () => {
    setIsOpen(!isOpen);
  }

  const handleNavigate = ( type, navValue ) => {
    if(type === 'goUp'){
      if(navigate > 1){
        setNavigate((old) => {return old - 1});
      }
    } else if(type === 'goDown'){
      if(navigate < 5){
        setNavigate((old) => {return old + 1});
      }
    } else if(type === 'navbar'){
      setNavigate(navValue);
      handleOpenNavbar();
    }
  }

  return (
    <>
      <NavBar navigate={navigate} handleNavigate={handleNavigate}/>
        <NavButton navigate={navigate} isOpen={isOpen} handleNavigate={handleNavigate} handleOpenNavbar={handleOpenNavbar}/>
          <Portfolio navigate={navigate} />
    </>
  );
}

export default App;
