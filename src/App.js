import React, { Component } from 'react';
import Student1 from './components/Student1';
import Student2 from './components/Student2';
import { DropDown } from './components/DropDown';

class App extends Component {

  render() {
    return (
      <div>
      <DropDown />
       {/* <Student1 />
       <Student2 /> */}
      </div>
    )
  }
}
export default App;

// import React from "react";
// import RenderProps from "./components/RenderProps";
// import RenderProps1 from "./components/RenderProps1";
// import RenderProps2 from "./components/RenderProps2";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>App Components...</h1>
//       <div>
//         <RenderProps
//           render={(count, increment) => (
//             <RenderProps1 count={count} increment={increment} />
//           )}
//         />
//         <RenderProps
//           render={(count, increment) => (
//             <RenderProps2 count={count} increment={increment} />
//           )}
//         />
//       </div>
//     </div>
//   );
// }
