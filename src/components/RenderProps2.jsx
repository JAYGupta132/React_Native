import React, { useState } from 'react'

export default function RenderProps2({count,increment}) {

  return (
    <div><h1>RenderProps 2 components</h1>
    
      <button onMouseOver={()=>increment()}>count {count}</button>
    </div>
  )
}
