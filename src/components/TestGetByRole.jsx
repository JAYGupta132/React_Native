import React from "react";

export const TestGetByRole = () => {
  return (
    <div className="App">
      <div>Get By Role test</div>
      <div>
        <h1>Test single inputBox v18</h1>
        <br />
        <input type="text" defaultValue="hello" disabled />
        <button>click</button>
      </div>
      <div>
        <h1>Test multiple inputBox and button v19</h1>
        <label htmlFor="input1">User Name</label>
        <input type="text" id="input1" />
        <br />
        <br />
        <label htmlFor="input2"> User Age</label>
        <input type="text" id="input2" />
        <br />
        <br />
        <label htmlFor="input3"> User Email</label>
        <input type="email" id="input3" />
        <br />
        <br />
        <button>click 1</button>
        <button>click 2</button>
      </div>
      <div role="div">
        <h1>Custom Role</h1>
        <div>dummy data</div>
      </div>
    </div>
  );
};
