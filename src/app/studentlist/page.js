'use client'
import Link from 'next/link'
import React from 'react'
// import "./about.css"

const Studentlist = () => {

  return (
    <>
      <div >
        <ul className=''>
            <li><Link href={"/studentlist/taha"}>Taha</Link> </li>
            <li><Link href={"/studentlist/shayan"}>Shayan</Link> </li>
            <li><Link href={"/studentlist/ahmSed"}>Ahmed</Link> </li>
        </ul>
   </div> 
    </>
  )
}

export default Studentlist