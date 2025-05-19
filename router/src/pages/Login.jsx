import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  // const [state,setState] = useState(true)
  const HandleLogin = ()=>{
      // backend data passing

      if(state) {
        navigate("/")
      }else{
        navigate("/about")
      }
    setState(prev=>!prev)
  }
  return (
    <>
    <label htmlFor="user">Username</label>
    <input type="text" name="" id="" placeholder='Enter a Username' />
    <label htmlFor="pass">Password</label>
    <input type="password" name="" id="" placeholder='Enter a Password' />
    <button onClick={HandleLogin}>Login</button>
    </>
  )
}
