export default async function UserList(){
    let data =await fetch("https://jsonplaceholder.typicode.com/users")
    data = await data.json()
    return data
}