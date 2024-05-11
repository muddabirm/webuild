import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import './index.css'
import Products from './components/Products'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Products/>
  </React.StrictMode>,
)
