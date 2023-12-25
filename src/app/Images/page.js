import Image from 'next/image'
import React from 'react'
import profile from "../../../public/vercel.svg"
const Images = () => {
  return (
    <>
    <Image src={profile}/>
    <br/>
    <Image src={"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"} width={200} height={200}/>

    </>
  )
}

export default Images