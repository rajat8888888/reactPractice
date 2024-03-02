import React,{memo} from 'react'

export const Button1 = memo((props) => {
    console.log("btn1 rendering");
    console.log("props",props);

  return (
    <div>
        <button onClick={props.clickAction}>btn1</button>
    </div>
  )
})
