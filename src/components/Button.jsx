import React from 'react'

export const Button = (props) => {
    console.log(props);
    const {btn,clickMe,data}=props // destructure of an object by key name
    
    const selfClick=()=>{
        clickMe?.()  // optional chaning
       console.log( data?.a?.b?.c);
    }

  return (
    <div><button  onClick={selfClick}>{btn}</button></div>
  )
}
