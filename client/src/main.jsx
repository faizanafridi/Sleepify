import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './Pages/Error.jsx'
import Login from './Pages/Login.jsx'
import {store} from './store/store.js'
import { Provider } from 'react-redux'
import DashBoard from './Pages/DashBoard.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: <DashBoard/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={Router}/>
    </Provider>
    
    
  </React.StrictMode>,
)
