// import React from 'react'

// export default function AsyncFunc() {
//     console.log("hello world");
//     setTimeout(()=>{
//         console.log("hello 1");
        
//     },[2000])
//     console.log("hello 2");

//     try {
//         const data = 10;
//         console.log(data);
//         setTimeout(()=>{
//         console.log("hello 1");
        
//     },[2000])
//         console.log(dt);
        
//         data++;
        
//         console.log(data);
//     } catch (error) {
//         console.log(error); 
//     }finally{
//         console.log("hlo");
        
//     }
    
    
    
    
//   return (
//     <div>AsyncFunc</div>
//   )
// }


import React, { useEffect, useState } from 'react'
import axios from 'axios'
import loader from '../assets/loader.webp'

export default  function AsyncFunc() {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)
    let arr = new Array(30).fill(0)
    const getData =async ()=>{
        try{
            const data =await axios.get("https://dummyjson.com/products");
            console.log(data.data.products);
            setProducts(data.data.products)
        }catch(e){
            console.log(e);
        }finally{
            setLoading(false)
        }
        
    }
    useEffect(()=>{
        getData()
    },[])
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
    <div className='flex flex-wrap gap-4 my-4 w-full mx-auto justify-center'>
    {products.map((val,id)=>(
        <div className="border-2 rounded-2xl p-2" key={id}>
            <img src={val.images[0]} alt="" className='w-60 h-40 object-cover' />
            <p className='text-center'>{val.title}</p>
        </div>
    ))}
    </div>
    
  )
}
