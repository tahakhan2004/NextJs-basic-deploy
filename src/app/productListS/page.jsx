import React from 'react'
import ButtonCmp from './ButtonCmp'

async function productList(){
    let data =await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}

const Page =async () => {
  let products =await productList()  
//   console.log(products);
  return (
    <>
    {
        products.map((item)=>{
            return(
                <>
                <h3 style={{backgroundColor:"yellowgreen"}}>{item.title}</h3>
                <ButtonCmp bgColor={{backgroundColor:"gold"}} price={item.price}/>
                {/* <ButtonCmp /> */}
                </>
                
            )
        })
    }
    </>
  )
}

export default Page