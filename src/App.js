import React from 'react'
import { createBrowserRouter, BrowserRouter, useRouteError, Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import Home from './pages/Home';
import Insert from './pages/Insert';
import Detail from './pages/Detail';
import "./assets/style.css";
import Edit from './pages/Edit';

const App = () => {
  
  return (
    <>
    <div>
    </div>
    <nav>
        <ul>
            <li className='flex border-b bg-gray-300 p-2'>
                <NavLink to="/"  className='p-2 rounded-md mx-1 hover:bg-blue-600 hover:text-white'>Home</NavLink>
                <NavLink to="/insert" className='p-2 rounded-md mx-1 hover:bg-blue-600 hover:text-white'>Insert</NavLink>
            </li>
        </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customer/:id" element={<Detail />} />
      <Route path="/customer/:id/edit" element={<Edit />} />
      <Route path="/insert" element={<Insert />} />
    </Routes>
    </>
  )
}

export default App
