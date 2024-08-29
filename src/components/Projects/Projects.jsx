import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {

    const [foodmenu, setFoodmenu] = useState(`${process.env.PUBLIC_URL}/assets/foodmenu.jpg`);
    const [filetransfer, setFiletransfer] = useState(`${process.env.PUBLIC_URL}/assets/filetransfer.jpg`);
    const [tictactoe, setTictactoe] = useState(`${process.env.PUBLIC_URL}/assets/tictactoe.jpg`);
    const [calculator, setCalculator] = useState(`${process.env.PUBLIC_URL}/assets/calculator.jpg`);

    const handleMouseEnter = ( type ) => {
        if(type === "foodmenu"){
            setFoodmenu(`${process.env.PUBLIC_URL}/assets/foodmenu.gif`);
        }else if(type === "filetransfer"){
            setFiletransfer(`${process.env.PUBLIC_URL}/assets/filetransfer.gif`);
        }else if(type === "tictactoe"){
            setTictactoe(`${process.env.PUBLIC_URL}/assets/tictactoe.gif`);
        }else if(type === "calculator"){
            setCalculator(`${process.env.PUBLIC_URL}/assets/calculator.gif`);
        }
    };
  
    const handleMouseLeave = ( type ) => {
        if(type === "foodmenu"){
            setFoodmenu(`${process.env.PUBLIC_URL}/assets/foodmenu.jpg`);
        }else if(type === "filetransfer"){
            setFiletransfer(`${process.env.PUBLIC_URL}/assets/filetransfer.jpg`);
        }else if(type === "tictactoe"){
            setTictactoe(`${process.env.PUBLIC_URL}/assets/tictactoe.jpg`);
        }else if(type === "calculator"){
            setCalculator(`${process.env.PUBLIC_URL}/assets/calculator.jpg`);
        }
    };

  return (
    <section className='projects-section-container'>
        <span className='projects-section-container-title'><i>M Y - P R O J E C T S</i></span>
        <div className='projects-container'>
            <div className='project-card card-shadow project-one' onMouseEnter={() => handleMouseEnter("foodmenu")} onMouseLeave={() => handleMouseLeave("foodmenu")}>
                <img className='project-picture' src={`${foodmenu}`} alt='projectimg'/>
                <span className='project-title'>Food Menu<span className='project-live' onClick={() => {window.open('https://nitin051997.github.io/FoodMenu/','_blank')}}>Live <img className='project-live-img' src={`${process.env.PUBLIC_URL}/assets/live.png`} alt='live' /></span></span>
                <span className='project-bio'>Web App. which allows user to choose their favourite food from the food menu.</span>
                <button className='project-btn make-hand' onClick={() => {
                    window.open('https://github.com/Nitin051997/FoodMenu.git','_blank')
                }}>
                    <img className='project-btn-img' src={`${process.env.PUBLIC_URL}/assets/github.png`} alt='github' />
                    <span className='project-btn-label'>View Code</span>
                </button>
            </div>
            <div className='project-card card-shadow project-two' onMouseEnter={() => handleMouseEnter("filetransfer")} onMouseLeave={() => handleMouseLeave("filetransfer")}>
                <img className='project-picture' src={`${filetransfer}`} alt='projectimg'/>
                <span className='project-title'>File Transfer</span>
                <span className='project-bio'>Web App. which send file from one user to another with their User ID.</span>
                <button className='project-btn make-hand' onClick={() => {
                    window.open('https://github.com/Nitin051997/File_Transfer_Reactjs.git','_blank')
                }}>
                    <img className='project-btn-img' src={`${process.env.PUBLIC_URL}/assets/github.png`} alt='github' />
                    <span className='project-btn-label'>View Code</span>
                </button>
            </div>
            <div className='project-card-mobile card-shadow project-three' onMouseEnter={() => handleMouseEnter("tictactoe")} onMouseLeave={() => handleMouseLeave("tictactoe")}>
                <div className='project-picture-container'>
                    <img className='project-picture-mobile' src={`${tictactoe}`} alt='projectimg'/>
                </div>
                <span className='project-title'>Tic Tac Toe</span>
                <span className='project-bio'>Mobile App. Enjoy playing Tic Tac Toe with your friend's and family.</span>
                <button className='project-btn make-hand' onClick={() => {
                    window.open('https://github.com/Nitin051997/React_Native_TicTacToe','_blank')
                }}>
                    <img className='project-btn-img' src={`${process.env.PUBLIC_URL}/assets/github.png`} alt='github' />
                    <span className='project-btn-label'>View Code</span>
                </button>
            </div>
            <div className='project-card-mobile card-shadow project-four' onMouseEnter={() => handleMouseEnter("calculator")} onMouseLeave={() => handleMouseLeave("calculator")}>
                <div className='project-picture-container'>
                    <img className='project-picture-mobile' src={`${calculator}`} alt='projectimg'/>
                </div>
                <span className='project-title'>Calculator</span>
                <span className='project-bio'>Mobile App. Enjoy playing Tic Tac Toe with your friend's and family.</span>
                <button className='project-btn make-hand' onClick={() => {
                    window.open('https://github.com/Nitin051997/React_Native_Calculator','_blank')
                }}>
                    <img className='project-btn-img' src={`${process.env.PUBLIC_URL}/assets/github.png`} alt='github' />
                    <span className='project-btn-label'>View Code</span>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Projects;