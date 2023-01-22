import axios from 'axios'
import React, { useState } from 'react'

export default function CreateUser() {
  const [userdata, setUserdata] = useState('')
  const handleChange = e => { setUserdata(e.target.value) }

  const postUserData = e => {
    e.preventDefault()
    console.log("called")
    let user = { username: userdata }

    axios.post('http://localhost:5000/users/add', user, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      }
    }).then(res => {
      console.log('Response -------', res.data)
      setTimeout(() => {
        setUserdata('')
      }, 1000)
    }).catch(err => console.log('From axios', err))
  }

  return (
    <div>
      <h3>Create new User</h3>
      <form>
        <div className='form-group'>
          <label>Username: </label>
          <input type='text' className='form-control' value={userdata} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button onClick={postUserData} className='btn btn-primary'>Send Data</button>
        </div>
      </form>
    </div>
  )
}