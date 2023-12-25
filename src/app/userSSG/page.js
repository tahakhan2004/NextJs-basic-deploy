import Link from "next/link"
import UserList from "../../../public/services/getUser"

const Page =async () => {
    let users = await UserList()  
    return (
      <>
      {
          users.map((item)=>{
              return(
                  <>
                  <Link key={item.id} href={`/userSSG/${item.id}`}>{item.name}</Link>
                  <br/>
                  </>
                  
              )
          })
      }
      </>
    )
  }
  
  export default Page