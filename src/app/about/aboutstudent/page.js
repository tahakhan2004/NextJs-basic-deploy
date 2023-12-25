import Link from 'next/link'
import React from 'react'
import "../about.css"

const Aboutstudent = () => {
  return (
    <>
    <h1>page for about student</h1>
    <Link href={'/about'}>go to about page</Link>

    </>
  )
}

export default Aboutstudent