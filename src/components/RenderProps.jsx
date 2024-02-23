import React, { useState } from 'react'

export default function RenderProps({render}) {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }
  return (
    <div>
      <h1>RenderProps</h1>
      <h2>{render(count,increment)}</h2>
    </div>
  )
}
