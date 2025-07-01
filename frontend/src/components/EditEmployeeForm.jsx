import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

 const form = {
    name : "",
    age : "",
    position : "",
    salary : ""
}
export default function EditEmployeeForm({form}) {
    
    const [formData,setFormData] = useState(form)
    const [error,setError] = useState({name:"",message:"",isActive : false})
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData(prev=>({...prev,[name]:value}))
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const {name,age,position,salary} = formData
            if(!name){
                setError({name :"name" ,message : "please enter a name" ,isActive : true})
               return ; 
            }
            if(!age || age < 18){
                setError({name :"age" ,message : "please enter a age" ,isActive : true})
               return ; 
            }
            if(!position){
                setError({name :"position" ,message : "please enter a position" ,isActive : true})
               return ; 
            }
            if(!salary || salary < 100){
                setError({name :"salary" ,message : "please enter a salary" ,isActive : true})
               return ; 
            }
            console.log(formData);
            const bgURl = import.meta.env.VITE_BACKEND_URL
            const res = await axios.post(`${bgURl}/employee`,formData)
            const {success,message,data} = res.data
            
            if(!success){
                alert(message)
                return ;
            }
            setState(prev=>!prev)
            setFormData(form)
        } catch (error) {
            console.log(error);
            
        }finally{
            // e.target.reset()
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            setError({name:"",message:"",isActive : false})
        },[2000])
    },[error])
    
  return (
    <form onSubmit={handleSubmit}>
        <div className="">
            {error.isActive &&  error.name == "name" && (<p style={{color:"red"}}>{error.message}</p>)}
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder='Enter a name' value={formData.name} onChange={handleChange}/>
        </div>
        <div className="">
            {error.isActive &&  error.name == "age" && (<p style={{color:"red"}}>{error.message}</p>)}
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" placeholder='Enter a age' value={formData.age} onChange={handleChange}/>
        </div>
        <div className="">
            {error.isActive &&  error.name == "position" && (<p style={{color:"red"}}>{error.message}</p>)}
            <label htmlFor="position">Position</label>
            <select name="position" id="position" onChange={handleChange}>
                <option value="Labour">Select a option</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="QA">QA</option>
                <option value="TL">TL</option>
            </select>
            <input type="text" name="position" id="" placeholder='Enter a position' value={formData.position} onChange={handleChange}/>
        </div>
        <div className="">
            {error.isActive &&  error.name == "salary" && (<p style={{color:"red"}}>{error.message}</p>)}
            <label htmlFor="salary">Salary</label>
            <input type="number" name="salary" id="salary" placeholder='Enter a salary' value={formData.salary} onChange={handleChange}/>
        </div>
        <button type='submit'>Add Employee</button>
    </form>
  )
}
