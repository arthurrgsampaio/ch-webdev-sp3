import { NavLink } from "react-router-dom";
import Fia from "../assets/images/fia.png";

const Header = () => {
  return (
    <>
      <header className="text-black flex justify-around h-14 items-center font-nats">
        <nav>
          <div id="left" className=" gap-3 flex items-center">
            <div id="fia-logo">
              <img src={Fia} alt="FIA" className="w-8"/>
            </div>
            <p className="text-4xl">|</p>
            <div id="nav-links">
              <ul className="flex gap-4">
                <li>
                  <NavLink to="/noticias">NOTÍCIAS</NavLink>
                </li>
                <li>
                  <NavLink to="/loja">LOJA</NavLink>
                </li>
                <li>
                  <NavLink to="/videos">VÍDEOS</NavLink>
                </li>
              </ul>
            </div>
          </div>
          
          <div id="middle">

          </div>
          
          <div id="right">

          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;