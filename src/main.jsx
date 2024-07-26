import React from 'react';
import ReactDOM from 'react-dom/client';

import { Tasktree } from './Tasktree';
// import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '*',
    element: <Tasktree />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={ router }/>
  // </React.StrictMode>,
)