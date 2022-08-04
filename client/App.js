import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ExerciseList from './components/Homepage';
import CreateExercise from './components/FillFomrs';
import CreateUser from './components/createUser';
import EditExercise from './components/listForms';
import Database from './components/database';
import Submit from './components/Submit';
import './styles/addStaff.css'
import EditEmployees from './components/editForms';
import Dashboard from './components/dashboard';
import Footer from './components/Footer';


function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <br />
          <Routes>
              <Route path='/' exact element={<ExerciseList/>} />
              <Route path='/edit' element={<EditExercise/>} />
              <Route path='/add' element={<CreateExercise/>} />
              <Route path='/search' element={<CreateUser/>} />
              <Route path='/data' element={<Database/>} />
              <Route path='/submit' element={<Submit/>} />
              <Route path='/update' element={<EditEmployees/>} />
              <Route path='/dash' element={<Dashboard/>} />
          </Routes>
        </div>
        < Footer />
    </BrowserRouter>
  );
}

export default App;

