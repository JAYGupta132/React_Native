import React, { useState } from 'react'
import Hoc from './HOC'

const Student1 = ({increase, num}) => {
  return (
    <div>
      <h1>Student1</h1>
      <button onClick={()=>increase()}>student1 {num} </button>
    </div>
  )
}

export default Hoc(Student1)