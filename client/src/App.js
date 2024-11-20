import './App.css';
import Home from './Routes/Home';
import Categoria from './Routes/Categoria';
import NuevoProducto from './Routes/NuevoProducto';

import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom"

import React from 'react';


function App() {

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className='container'>
            <Link to="/productos" className='btn btn-primary'>Pudu miniatura</Link>
            <div className='row'>
              <div className='col-3'>
                <Link to="/productos/aretes" className='btn btn-primary'>Aretes</Link>
              </div>
              <div className='col-3'>
                <Link to="/productos/llavero" className='btn btn-primary'>Llavero</Link>
              </div>
              <div className='col-3'>
                <Link to="/productos/collar" className='btn btn-primary'>Collar</Link>
              </div>
              <div className='col-3'>
                <Link to="/agregar-producto" className='btn btn-primary'>+</Link>
              </div>
            </div>
          </div>
        </header>
        <Routes>      
          <Route path="/" element={<Navigate to="/productos"/>}/>

          <Route path="/productos" element={<Home/>}/>

          <Route path="/productos/:categoria" element={<Categoria/>}/>

          <Route path="/agregar-producto" element={<NuevoProducto/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
