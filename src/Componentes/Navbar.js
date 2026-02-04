import React, { useState } from "react";
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => setSidebar(!sidebar);
  const closeSidebar = () => setSidebar(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* ÚNICA BARRA NAVBAR */}
        <nav className="navbar">

          {/* BOTÓN HAMBURGUESA - Solo visible en móvil por CSS */}
          <button className='menu-bars' onClick={toggleSidebar}>
            <FaIcons.FaBars />
          </button>

          {/* MENÚ / SIDEBAR */}
          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">

              {/* BOTÓN CERRAR X - Solo visible en móvil por CSS */}
              <li className="navbar-toggle">
                <button className="menu-bars" onClick={closeSidebar}>
                  <AiIcons.AiOutlineClose />
                </button>
              </li>

              {/* ITEMS DEL MENÚ */}
              {Sidebar.map((item, index) => (
                <li key={index} className="nav-text">
                  <Link to={item.path} onClick={closeSidebar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
