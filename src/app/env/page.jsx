import React from 'react'
import {BASE_URL} from "@/config/constants"
const Enviroment = () => {
  // console.log(process.env.NODE_ENV);
  console.log(process.env.SERVER_PASS);

  return (
    <>
      {
        process.env.NODE_ENV=="development" ? <h1>You are on development</h1>:
        <h1>You are on production mode</h1>

      }
        <h1>{BASE_URL}</h1>

    </>
  )
}

export default Enviroment