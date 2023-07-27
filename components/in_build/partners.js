import React from 'react'
const array = [
    {
      link: "",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/77hmeEJo3ZPlURCU02fD52/aa37b7f7b52285ba350acac62d8af5c1/illinois-3.png?auto=format%2Ccompress&dpr=1&w=&h=32",
    },
    {
      link: "",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6XkOucZz6pMLV5DPvXCgCL/1777129a58b0a62b237bd28e9956afe8/duke-3.png?auto=format%2Ccompress&dpr=1&w=&h=32",
    },
    {
      link: "",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1c6RjBHi3Lqb9QpWxje7iA/b529f909c5230af3210ba2d47d149620/google.png?auto=format%2Ccompress&dpr=1&w=&h=37",
    },
    {
      link: "",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/60SA8pGxPXMmJf4n7umK1H/ccec31bbe2358210bf8391dcba6cd2f1/umich.png?auto=format%2Ccompress&dpr=1&w=&h=55",
    },
    {
      link: "",
      imageUrl:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3toC4I7jbWxiedfxiyNjtT/735faeaf976a9692f425f8c3a7d125dc/1000px-IBM_logo.svg.png?auto=format%2Ccompress&dpr=1&w=&h=32",
    },
    
  ];

const Partners = () => {
  return (
    <div className='md:px-48 px-4 pt-6 pb-10'>
      <p className='text-2xl md:text-3xl font-semibold text-gray-800'>Our Clients and Partners</p>
      <div className='grid grid-cols-3 place-items-center md:grid-cols-5 gap-x-3 md:gap-x-6  mt-12 gap-y-8 '>
        {array.map((item)=>{
            return (
                <div>
                    <picture>
                        <img src={item.imageUrl} alt="" />
                    </picture>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Partners
