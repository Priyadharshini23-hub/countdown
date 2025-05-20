import React from 'react'
import MyHobbyDis from './MyHobbyDis'
 const MyAgeDis = ({myAge,myHobby}) => {
    console.log("This is MyHobbyDis components",myHobby);
  return (
    <div>
        <p> my age is {myAge}</p>
        <MyHobbyDis myHobby={myHobby}/>
    </div>
    
  )
}
export default MyAgeDis