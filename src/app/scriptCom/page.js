"use client"
import Script from 'next/script'
import React from 'react'

const Scriptt = () => {
  return (
    <>
    <Script src='/location.js'
    onLoad={()=>{console.log("file loaded");}}
    />
    <h1>get user location</h1>
    </>
  )
}

export default Scriptt