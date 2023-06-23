import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Statistics from './components/Statistics.JSX';
import AppliedJobs from './AppliedJobs.jsx';
import Blog from './components/Blog.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/statistics",
        element:<Statistics/>
      },
      {
        path:"/appliedjobs",
        element:<AppliedJobs/>
      },
      {
        path:"/blog",
        element:<Blog/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
