import React from 'react'
import { createBrowserRouter, BrowserRouter, useRouteError, Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import Home from './pages/Home';
import Insert from './pages/Insert';
import Detail from './pages/Detail';
import "./assets/style.css";
import Edit from './pages/Edit';
import Header from './components/Header';
import Login from './pages/Login';

const App = () => {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer/:id" element={<Detail />} />
        <Route path="/customer/:id/edit" element={<Edit />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
