"use client"
import React from 'react'

const Lectures = ({params}) => {
  return (
    <>
    <h1>lecture: {params.lecture[0]}</h1>
    <h1>Day: {params.lecture[1]}</h1>

    </>
  )
}

export default Lectures