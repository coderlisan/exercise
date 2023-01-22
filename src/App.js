import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Componants/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateUser from './Componants/CreateUser'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <br />
          <Routes>
            {/* <Route path='/' element={<ExerciseList />} /> */}
            <Route path='/' element={<CreateUser />} />
            {/* <Route path='/edit/:id' element={<EditExercise />} /> */}
            {/* <Route path='/user' element={<CreateUser />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}