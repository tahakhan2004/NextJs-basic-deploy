'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [name, setname] = useState("taha")
  const greeting = (item)=>{
    setname("shayan")
    // alert(item)
  }
  // component inside component: make a simple function then either call it or make it a react component
  return (
    <>
    <main className={styles.main}>
      <User name={name}/>
      {/* <User name="shayan"/> */}
      <h2>Home page</h2>
      <button onClick={()=>greeting("hi nextjs")}>Click me</button>

    </main>
    {/* <h1>Hello World</h1> */}
    
    {/* {simplefunc()} */}
    {/* <simplefunc/> */}
    </>
    
  )
}


const User = ({name})=>{
  const router = useRouter()
  const routing = (name)=>{
    router.push(name)
  }
  return(
    <>
    <h4>
      User name is {name}
    </h4>
    <br/>
    <Link href={"/login"}>Go to login page</Link>
    <br/>
    <Link href={"/about"}>Go to about page</Link>
    <br/>
    <br/>
    <Link href={"/productListC"}>Go to about page</Link>
    <br/>

    <br/>
    <br/>
    <Link href={"/productListS"}>Go to about page</Link>
    <br/>
<br/>
<button onClick={()=>{routing("/login")}}>go to login page </button> 
<br/>
<button onClick={()=>{routing("/about")}}>go to about page </button> 
<br/><br/><br/>
<button onClick={()=>{routing("/studentlist")}}>go to student list page </button>

    </>

  )
}