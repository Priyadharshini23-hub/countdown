import React, { useState } from 'react'

const MyHobbyDis = ({myHobby}) => {
    console.log("This is MyHobbyDis components",myHobby);
    const [data, setData] = useState("")
    console.log( )
  return (
    <div>
        <input type="text" value={data} onChange ={(e)=> setData(e.target .value)}/>
        <p> My hobby is {myHobby}</p>
    </div>
  )
}
export default MyHobbyDis
