import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Route, RouterProvider, BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Root from './routes/Root';
import Error from './pages/Error';
import Insert from './pages/Insert';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    elemenet: <Root />,
    errorElement: <Error />,
    children: [
      { 
        path: 'insert',
        element: <Insert />
      }
    ]
  }, 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
