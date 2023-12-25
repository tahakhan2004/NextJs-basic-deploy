import React from 'react'

async function productList(){
    let data =await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}

const Loader = async () => {
  let products =await productList()  

  return (
    <>
    {
        products.map((item)=>{
            return(
                <>
                <h3 style={{backgroundColor:"yellowgreen"}}>{item.title}</h3>
                </>
                
            )
        })
    }
    </>
  )
}

export default Loader