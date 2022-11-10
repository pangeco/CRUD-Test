import React from 'react'
import "./App.css";
import { createBrowserRouter, BrowserRouter, useRouteError, Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import Home from './pages/Home';
import Insert from './pages/Insert';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Header from './components/Header';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
// import { withRouter } from "react-router";

// const headerWithRouter = withRouter(Header);

const App = () => {
  
  return (
    <div className='App d-flex flex-row'>
      <Sidebar/>
      <div className='flex-fill'>
        <Header/>
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer/:id" element={<Detail />} />
          <Route path="/customer/:id/edit" element={<Edit />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      </div>
    </div>

  )
}

export default App
