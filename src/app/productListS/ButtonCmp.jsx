"use client"
import React, { useState } from 'react'

const ButtonCmp = ({price, bgColor}) => {
    const [color, setcolor] = useState({backgroundColor:"lightgreen"})
  return (
    <>
    <button onClick={()=>{alert("$" + price)}} style={color}>Check Price</button>
    <button onClick={()=>{setcolor(bgColor)}}>Change Color</button>
    </>
  )
}

export default ButtonCmp