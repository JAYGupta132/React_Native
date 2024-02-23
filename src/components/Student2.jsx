import React, { useState } from 'react'
import Hoc from './HOC'

const Student2 = ({increase,num}) => {
 
  return (
    <div>
      <h1>Student2</h1>
      <button onClick={()=>increase()}>student2 {num} </button>
    </div>
  )
}

export default Hoc(Student2)