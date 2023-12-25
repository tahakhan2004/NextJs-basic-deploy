import Link from 'next/link'
import React from 'react'
import "./about.css"

const About = () => {
  return (
    <>
    <h1>About Page</h1>
<Link href={"/"}>Go to home page</Link>   
<br/>
<Link href={"/about/aboutcollege"}>Go to aboutcollege page</Link>   
<br/>
<br/>
<Link href={"/about/aboutstudent"}>Go to aboutstudent page</Link>   

    </>
  )
}

export default About