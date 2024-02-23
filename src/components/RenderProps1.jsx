import React, { useState } from 'react'

export default function RenderProps1({count,increment}) {
  
  return (
    <div><h1>RenderProps 1 components</h1>
    
      <button onClick={()=>increment()}>count {count}</button>
    </div>
  )
}
