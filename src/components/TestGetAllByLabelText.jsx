import React from "react";

export const TestGetAllByLabelText = () => {
  return (
    <div className="App">
      <h1>TestGetAllByLabelText</h1>
      <div>
        <label htmlFor="input 1">UserName</label>
        <input type="text" id="input 1" defaultValue={true} />
        <br />
        <br />
        <label htmlFor="input 2">UserName</label>
        <input type="text" id="input 2" defaultValue={true}/>
        <br />
        <br />

        <label htmlFor="input 3">UserName</label>
        <input type="text" id="input 3" defaultValue={true}/>
        <br />
        <br />

        <label htmlFor="input 4">UserName</label>
        <input type="text" id="input 4" defaultValue={true} />
      </div>
      <br />
      <br />    

      <div>
        <label htmlFor="checkbox 1">Checkbox</label>
        <input type="checkbox" id="checkbox 1" defaultChecked/>
        <br />
        <br />
        <label htmlFor="checkbox 2">Checkbox</label>
        <input type="checkbox" id="checkbox 2" defaultChecked/>
        <br />
        <br />
        <label htmlFor="checkbox 3">Checkbox</label>
        <input type="checkbox" id="checkbox 3" defaultChecked/>
        <br />
        <br />
        <label htmlFor="checkbox 4">Checkbox</label>
        <input type="checkbox" id="checkbox 4" defaultChecked/>
      </div>
    </div>
  );
};
