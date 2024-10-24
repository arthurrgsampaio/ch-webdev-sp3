import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BGHEADER from '../assets/background/background-header-garage.png'
import HERO from '../assets/images/hero3.jpg'

const CarreiraHeader = () => {
    return (
        <>
        <header id= "header-garagem" className="pb-2 flex justify-center align-middle" style={{
            backgroundImage: `url(${BGHEADER})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            }}>
          <div className="flex items-center gap-5">
            <div className="text-1xl font-semibold mt-2">CLASSIFICAÇÕES</div>
            <div className="text-5xl font-light mb-1">|</div>
            <h1 className="text-6xl font-bold">GARAGEM</h1>
            <div className="text-5xl font-light mb-1">|</div>
            <div className="text-1xl font-semibold mt-2">MEUS ASCOINS: 1000</div>
          </div>
        </header>
  
        <div className="relative bg-cover bg-center h-80 border-black border-t-8 border-b-8" style={{ 
            backgroundImage: `url(${HERO})`,
            }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-9xl font-semibold">MODO CARREIRA</h2>
          </div>
        </div>
  

        <nav className="nav-container bg-gray-300 h-20 mb-10">
          <div className="flex gap-2 justify-center">
              <NavLink to="/garagem" className="relative flex justify-center border-projRed border-b-8 text-projRed text-3xl font-semibold bg-gray-200 h-28 p-8" style={{ width: "625px"}}>JOGOS</NavLink>
              <NavLink to="/escuderia" className="relative flex justify-center border-black border-b-8 text-black text-3xl font-semibold bg-gray-200 h-24 p-6" style={{ width: "625px"}}>MINHA ESCUDERIA</NavLink>
              <NavLink to="/pilotos" className="relative flex justify-center border-black border-b-8 text-black text-3xl font-semibold bg-gray-200 h-24 p-6" style={{ width: "625px"}}>MEUS PILOTOS</NavLink>
          </div>
        </nav>
        </>
    )
};

export default CarreiraHeader;