import { Outlet } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import Footer from "./components/Footer"
import { PilotosProvider } from "./contexts/PilotosContext";
import Garagem from "./pages/Garagem";
import Partida from "./pages/Partida";


function App() {

  return (
    
    <>

      <PilotosProvider>
      <Header />            
      <Outlet />
      <Footer />   
      </PilotosProvider>
   
    </>
  )
}

export default App
