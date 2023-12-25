"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import modulerCSS from "../main.module.css"
import outside from "@/app/Style/outside.module.css"

const Login = () => {
  const [color, setcolor] = useState("red")
  return (
    <>
    <h1 className={modulerCSS.main}>Login Page</h1>
    <h3 className={outside.main}>Login Page</h3>
<br/>
<h1 className={color==="red" ? modulerCSS.red : modulerCSS.green}>Condition modeule CSS</h1>
<h2 style={{backgroundColor: color==="red" ? "red" : "green"}}>Condition with Style</h2>
<button onClick={()=>setcolor("green")}>change color</button>



    <br/>
    <Link href="/">Go to home page</Link>
    </>
    
  )
}

export default Login