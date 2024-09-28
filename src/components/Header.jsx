import { NavLink } from "react-router-dom";
import Fia from "../assets/images/fia.png";
import FE from "../assets/images/formula-e-logo.png";

const Header = () => {
  return (
    <>
      <header className="text-black flex justify-center h-14 items-center font-nats w-auto">
        <nav
          className="flex justify-between items-center"
          style={{ width: "100%", padding: "0 1.5rem" }}
        >
          <div id="left" className=" gap-3 flex items-center">
            <div id="fia-logo">
              <img src={Fia} alt="FIA" className="h-8" />
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
            <img src={FE} alt="formula e logo" className="h-8" />
          </div>

          <div id="right" className="flex gap-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <div className="nav-links">
              <ul className="flex items-center gap-4">
                <li>
                  <NavLink to="/login">LOGIN</NavLink>
                </li>
                <li>
                  <p className="text-4xl">|</p>
                </li>
                <li>
                  <NavLink to="/registro">REGISTRO</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="sub-header"
        className="text-white bg-projBlue flex justify-between h-14 items-center font-nats w-auto"
        style={{ padding: "0 1.5rem" }}
      >
        <NavLink to={"/garagem"}>GARAGEM</NavLink>
        <div className="relative rounded-md shadow-sm">
          <div
            id="icon"
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search-bar"
            placeholder="BUSCAR"
            className="text-gray-500 rounded-2xl bg-gray-300 placeholder:text-gray-400 pl-7"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
