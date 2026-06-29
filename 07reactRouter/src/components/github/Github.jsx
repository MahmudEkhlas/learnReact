import React, { useEffect, useState, useLoa } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/MahmudEkhlas')
    //     .then(resp => resp.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center mg-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default Github

export const githubinfo = async() =>{
    const resp = await fetch('https://api.github.com/users/MahmudEkhlas')
    return resp.json();
}