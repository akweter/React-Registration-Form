import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/addStaff.css';
import Navbars from './components/Navbar';
import Home from './components/Homepage';
import Dashboard from './components/dashboard';
import Form from './components/form';
import Adnim from './components/admin';
import Submit from './components/Submit';
import Update from './components/update';


function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <div className='container'>
        <Routes>
          <Route path='*' element={ <Navigate to="/" /> }/>
          <Route path='/' exact element={ < Home />} />
          <Route path='/dashboard' element={ < Dashboard />} />
          <Route path='/form' element={ < Form />} />
          <Route path='/admin' element={ < Adnim />} /> 
          <Route path='/submit' element={ < Submit />} />
          <Route path='/edit/:id' element={ < Update />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
