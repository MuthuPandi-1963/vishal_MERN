import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../../data/products'
import ProductsWrapper from './ProductsWrapper'
import ProductCard from './ProductCard'

export default function CategoryProduct() {
    const {id} = useParams()
    const data = productsData.filter((val,index)=>val.c_id ==  id )
    console.log(data);
    
  return (
    <ProductsWrapper>
    {data.map((val,id)=>(
        <ProductCard key={id} {...val} />
    ))}
   </ProductsWrapper>
  )
}
