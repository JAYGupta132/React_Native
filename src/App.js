import { useState } from "react";
import "./App.css";
import Class_Component from "./components/ClassComponent";
import { Functional_component } from "./components/Functional_component";
import { TestGetByRole } from "./components/TestGetByRole";
import { TestGetAllByRole } from "./components/TestGetAllByRole";
import { TestGetByLabelText } from "./components/TestGetByLabelText";
import { TestGetAllByLabelText } from "./components/TestGetAllByLabelText";
import { TestByPlaceHolder } from "./components/TestByPlaceHolder";
import { TestByText } from "./components/TestByText";
import { TestByTestId } from "./components/TestByTestId";
import { TestByDisplayId } from "./components/TestByDisplayId";
import TestGetByTitle from "./components/TestGetByTitle";
import TestGetbyAltText from "./components/TestGetbyAltText";
import AssertionMethod from "./components/AssertionMethod";
import String_redux from "./components/String_redux";

function App() {
  // const [name, setName] = useState("");

  // const onChange = (e) => {
  //   // setName(name)
  // };
  // const handleClick = (e) => {
  //   setName(name);
  // };
  return (
    <div>
      <String_redux />
      {/* <AssertionMethod /> */}
      {/* <TestGetbyAltText /> */}
      {/* <TestGetByTitle /> */}
      {/* <TestByDisplayId /> */}
      {/* <TestByTestId /> */}
      {/* <TestByText /> */}
      {/* <TestByPlaceHolder /> */}
      {/* <TestGetAllByLabelText /> */}
      {/* <TestGetByLabelText /> */}
      {/* <TestGetAllByRole /> */}
      {/* <TestGetByRole /> */}
      {/* <p>First React test case</p> */}
      {/* <Class_Component /> */}
      {/* <Functional_component /> */}
    </div>
    // <div className="App">
    /* <p>Jay prakash gupta</p>
    <input
        type="text"
        placeholder="Enter User Name"
        name="username"
        id="userId"
        value="jay prakash"
        readOnly
      />
      <br />
      <br />
      <img
        title="AI generated image"
        src="https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?t=st=1703152009~exp=1703155609~hmac=e5e4a6dfb9110c938cfc93e4f810be8cfbea18abbf5c3935a5afc0c8f0774acb&w=996"
        width={600}
        alt=""
      />
      <br />
      <br />
      <button onClick={() => setName("jay prakash gupta")}>Click here</button>
      <br />
      <br />
      <div>{name}</div> */
    // </div>
  );
}

export default App;
