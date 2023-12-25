import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight:'100',
    subsets:["latin"],
    display:"swap"
}) 

const Fontoptimize = () => {
  return (
   <>
    <h1>Without Next Font</h1>
    <br/>
    <h1 className={roboto.className}>with Next Font</h1>
   </>
  )
}

export default Fontoptimize