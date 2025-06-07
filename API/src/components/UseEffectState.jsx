import React, { useEffect, useState } from 'react'
import axios from 'axios'
import loader from '../assets/loader.webp'

export default  function useEffectState() {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    const [count,setCount] = useState(1);
    let arr = new Array(count).fill(0)
    const getData =async ()=>{
        try{
            // setLoading(true)
            const data =await axios.get("https://dummyjson.com/products");
            console.log(data.data.products);
            const products = data.data.products
            setProducts(products.filter(val=>val.id <= count))
        }catch(e){
            console.log(e);
        }finally{
            setLoading(false)
        }
        
    }
    useEffect(()=>{
        getData()
    },[count])
    if(loading) {
        return <div className='flex flex-wrap gap-4 my-4 w-full mx-auto justify-center'>
    {arr.map((val,id)=>(
        <div className="border-2 rounded-2xl p-2" key={id}>
            <img src={loader} alt="" className='w-60 h-40 object-cover' />
        </div>
    ))}
    </div>
    }
    
  return (
    <>
    <div className='flex flex-wrap gap-4 my-4 w-full mx-auto justify-center'>
    {products.map((val,id)=>(
        <div className="border-2 rounded-2xl p-2" key={id}>
            <img src={val.images[0]} alt="" className='w-60 h-40 object-cover' />
            {/* <p className='text-center'>{val.title}</p> */}
        </div>
    ))}
    </div>
    <button className='text-blue-500 hover:text-blue-700 font-black underline cursor-pointer px-4 py-1 rounded-lg ring-1' onClick={()=>setCount(prev=>prev+1)}>See more</button>
    </>
  )
}
