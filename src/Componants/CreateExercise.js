import axios from 'axios'
import React, { useState } from 'react'

export default function CreateExercise() {
  const [userdata, setUserdata] = useState('')
  const handleChange = e => { setUserdata(e.target.value) }

  const postUserData = e => {
    e.preventDefault()
    let user = {username: userdata}

    axios.post('http://localhost:5000/users/add', user, {
    headers:{
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
    }}).then(res => {
      console.log(res.data)
      setTimeout(() => {
        setUserdata('')
      }, 1000)
    }).catch(
      (e) => { 
        console.log('From axios', e) }
    )
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
                    <button onClick={()=>postUserData} className='btn btn-primary'> Send data </button> 
        </div>
      </form>
    </div>
  )
}
