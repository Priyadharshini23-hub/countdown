import React from 'react'
import MyAgeDis from './MyAgeDis'

const Sample = ({myName,myAge,myHobby}) => {
  return (
    <div>
        <h1>Welcome({myName})</h1>
        <MyAgeDis myAge={myAge} myHobby={myHobby}/>
    </div>
  )
}
export default Sample