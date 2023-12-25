import Link from 'next/link'
import React from 'react'
import "../about.css"
const AboutCollege = () => {
  return (
    <>
    <h1>page for about college</h1>
    <Link href={'/about'}>go to about page</Link>
    </>
  )
}

export default AboutCollege