import React from 'react'

export const Text = (props) => {
  const  {data}=props
  console.log(data);
  return (
    <div>{data}</div>
  )
}
