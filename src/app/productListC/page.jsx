"use client"
import React, { useEffect, useState } from 'react'

const Productlist = () => {
  const [products, setProducts] = useState([])
  useEffect(async ()=>{
    let data =await fetch("https://dummyjson.com/products")
    data = await data.json()
    setProducts(data.products)
  }, [])
  return (
    <>
    {
      products.map((item)=>{
        return(
          <h3>Name: {item.title}, Price: {item.price}</h3> 
        )
      })
    }

    </>
  )
}

export default Productlist