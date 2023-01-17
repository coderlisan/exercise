import axios from 'axios'
import React, { useState } from 'react'

export default function CreateExercise() {
  const [userdata, setUserdata] = useState('')
  const handleChange = e => { setUserdata(e.target.value) }

  const postUserData = e => {
    e.preventDefault()
    const user = { username: userdata }

    axios.post('http://localhost:5000/users/add', user).then(res => {
      console.log(res.data)
    }).catch(err => { console.log(err) })

    setUserdata('')
  }

  return (
    <div>
      <h3>Create new User</h3>
      <form onSubmit={postUserData}>
        <div className='form-group'>
          <label>Username: </label>
          <input type='text' className='form-control' value={userdata} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type='submit' value='Create' className='btn btn-primary' />
        </div>
      </form>
    </div>
  )
}