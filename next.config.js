/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["images.unsplash.com"]
    },
    output:"export",

    // redirects: async()=>{
    //     return[
    //         {
    //             source:"/redirect",
    //             destination:"/login",
    //             permanent:false,
    //         },
    //         {
    //             source:"/redirect/:id",
    //             destination:"/login",
    //             permanent:false,
    //         },
    //         {
    //             source:"/admin",
    //             destination:"/login",
    //             permanent:false
    //         }
    //     ]
    // },
}

module.exports = nextConfig
