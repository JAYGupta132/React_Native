import React, { useState } from "react";
import { handleOtherMethod } from "./functionalMethod";

export const Functional_component = () => {
  const [data, setData] = useState("");

  const handleData = () => {
    setData("hello")
  }

  return (
    <>
      <div>Functional_component</div>
      <button data-testid="btn1" onClick={handleData}>update</button>
      <button onClick={handleOtherMethod}>click</button>
      
      <div>{data}</div>
    </>
  );
};
