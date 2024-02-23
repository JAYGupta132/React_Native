import React from 'react'

export const TestGetByLabelText = () => {
  return (
    <div className='App'>
      <h1> TestGetByLabelText</h1>
      <div>
        <label htmlFor='input1'>UserName</label>
        <input type='text' id='input1' defaultValue={'jay prakash'} />
      </div>
      <div>
        <label htmlFor='Skills'>skills</label>
        <input type='checkbox' defaultChecked id='Skills'/>
      </div>
    </div>
  )
}
