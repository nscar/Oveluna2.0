import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const Sidebar = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Productos',
        path: '/CatalogoP',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    {
        title: 'Contacto',
        path: '/ContactoP',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },

]