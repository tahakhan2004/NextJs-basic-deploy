import React from 'react'
import UserList from '../../../../public/services/getUser'

const Userdetails = async ({params}) => {
    let users = await UserList()
    let currentId = params.userId
    let userData = users[currentId-1]

   return(
    <>
    <h1>name: {userData.name}</h1>
    <h3>email: {userData.email}</h3>

    </>
   ) 
}
export default Userdetails

export async function generateStaticParams(){
    let users = await UserList()
    return users.map(user =>({
        userId: user.id.toString()
    }))
} 