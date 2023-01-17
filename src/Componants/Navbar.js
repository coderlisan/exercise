import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg'>
      <Link to='/' className='navbar-brand'>ExcerTracker</Link>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <Link to='/' className='navbar-brand'>Exercises</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/create' className='navbar-brand'>Create Exercise</Link>
          </li>
          <li className='navbar-item'>
            <Link to='/user' className='navbar-brand'>Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}