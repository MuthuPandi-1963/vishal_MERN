import React from 'react'
import EmployeeDetails from './components/EmployeeDetails'
import EmployeeForm from './components/EmployeeForm'
import { useState } from 'react'

export default function App() {
 
  const [state,setState] = useState(false)
  return (
    <>
    <EmployeeDetails state={state} setState={setState} />
    <EmployeeForm setState={setState}/>
    </>
  )
}
