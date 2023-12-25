'use client'
import Link from 'next/link'
import React from 'react'
import "./about.css"
import { usePathname } from 'next/navigation'
const Layout = ({children}) => {
    const pathName = usePathname()
  return (
    <>
      <div >
      {pathName !== "/about/aboutstudent" ?
        <ul className='about'>
            <li>
                <h4>About Common</h4>
            </li>
            <li><Link href={"/about"}>About page</Link> </li>
            <li><Link href={"/about/aboutcollege"}>About College page</Link> </li>
            <li><Link href={"/about/aboutstudent"}>About Student page</Link> </li>
        </ul>
        : null}
        {children}
   </div> 
    </>
  )
}

export default Layout