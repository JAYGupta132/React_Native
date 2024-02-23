import { fireEvent, render, screen, configure } from "@testing-library/react";
import App from "./App";
import { SnapShotTest } from "./components/SnapShotTest";
import renderer from "react-test-renderer";
import ClassComponent from "./components/ClassComponent";
import { handleOtherMethod } from "./components/functionalMethod";
import String_redux from "./components/String_redux";

// test("Test first react app", () => {
//   render(<App />);
//   const text = screen.getByText(/First react test Case/i);
//   const text2 = screen.getByText(/First react test Case/i);
//   const title = screen.getByTitle("AI generated image");
//   expect(text).toBeInTheDocument();
//   expect(text2).toBeInTheDocument();
//   expect(title).toBeInTheDocument();
// });

// test("Testing Input Box", () => {
//   render(<App />);
//   let chechInput = screen.getByRole("textbox");
//   let chechInputPlaceHolder = screen.getByPlaceholderText("Enter User Name");
//   expect(chechInput).toBeInTheDocument();
//   expect(chechInputPlaceHolder).toBeInTheDocument();
//   expect(chechInput).toHaveAttribute("name", "username");
//   expect(chechInput).toHaveAttribute("id", "userId");
//   expect(chechInput).toHaveAttribute("type", "text");
//   expect(chechInput).toHaveAttribute("value", "jay prakash");
// });

// describe("UI test case group", () => {
//   test("Testing Input Box 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });

//   test("Testing Input Box 2", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });
// });

// describe("API test case group 1", () => {
//   test("Testing Input Box 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });

//   test("Testing Input Box 2", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });
// });

// describe("API test case group 2", () => {
//   test("Testing Input Box 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });

//   test("Testing Input Box 2", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toBeInTheDocument();
//   });

//   describe("Inner described group", () => {
//     test("Testing Input Box 1", () => {
//       render(<App />);
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toBeInTheDocument();
//     });

//     test("Testing Input Box 2", () => {
//       render(<App />);
//       let checkInput = screen.getByRole("textbox");
//       expect(checkInput).toBeInTheDocument();
//     });
//   });
// });
// ''''''''''''''''''''''''''''''''''''''''''''''-----------------
// afterEach(()=>{
//   console.log("........... After All .............")
// })

// test("Input Field Test case 1",()=>{
//   console.log(" test 1")
//   render(<App />)
//   let input = screen.getByRole('textbox')
//   fireEvent.change(input,{target:{value:'jay prakash'}});
//   expect(input.value).toBe('jay prakash')
// })

// test("Input Field test case 2 ",()=> {
//   console.log(" test 2")

//   render(<App />)
//   let btn = screen.getByRole('button')
//   fireEvent.click(btn);
//   expect(screen.getByText("jay prakash gupta")).toBeInTheDocument()
// })

// =-============================================================

// test("",()=> {
//   const container = render(<SnapShotTest/>)
//   expect(container).toMatchSnapshot()
// })

// ==============================================

// test("class component method testing",()=>{
//   const componentData = renderer.create(<ClassComponent />).getInstance();
//   expect(componentData.getUserList()).toMatch('user Class Component')
// })

// ================================

// test("functional component  method testing case 1",()=> {
//   render(<App />)
//   const btn = screen.getByTestId('btn1')
//   fireEvent.click(btn)
//   expect(screen.getByText('hello')).toBeInTheDocument()
// })

// test("functional component method testing case 2",()=> {
//   expect(handleOtherMethod()).toMatch('handleOtherMethod')
// })

// ================================

// describe("GetByRole testing", () => {
// test("Test single inputBox v18", () => {
//   render(<App />);
//   const input = screen.getByRole("textbox");
//   expect(input).toBeInTheDocument();
//   expect(input).toHaveValue("hello");
//   expect(input).toBeDisabled();
// });

// test('Test single Button v18',()=> {
//   render(<App/>);
//   const btn = screen.getByRole('button');
//   expect(btn).toBeInTheDocument()
// })

//   test("Test multiple inputBox and button v19",()=> {
//     render(<App/>)
//     const input1 = screen.getByRole('textbox',{name:'User Name'})
//     const input2 = screen.getByRole('textbox',{name:'User Age'})
//     const input3 = screen.getByRole('textbox',{name:'User Email'})
//     const btn1 = screen.getByRole('button', {name: 'click 1'})
//     const btn2 = screen.getByRole('button', {name: 'click 2'})
//     const div1 = screen.getByRole('div')

//     expect(div1).toBeInTheDocument()
//     expect(input1).toBeInTheDocument()
//     expect(input2).toBeInTheDocument()
//     expect(input3).toBeInTheDocument()
//     expect(btn1).toBeInTheDocument()
//     expect(btn2).toBeInTheDocument()
//   })
// });

// =======================================================

// describe("GetAllByRole testing v20", () => {
//   test("test multiple button by same name v20", () => {
//     render(<App />);
//     const btn1 = screen.getAllByRole("button");
//     for (let i = 0; i < btn1.length; i++) {
//       expect(btn1[1]).toBeInTheDocument();
//     }
//   });

//   test("test multiple options by same value v20", () => {
//     render(<App />);
//     const options = screen.getAllByRole("option");
//     for (let i = 0; i < options.length; i++) {
//       expect(options[i]).toBeInTheDocument();
//     }
//   });
// });

// ==========================================================

// describe("GetByLabelText testing v21",()=>{
//   test('test inputBox by its label name v21',()=>{
//     render(<App />)
//     const input = screen.getByLabelText('UserName')
//     expect(input).toBeInTheDocument()
//     expect(input).toHaveValue('jay prakash')
//   })

//   test('test checkbox by label name v21',()=>{
//     render(<App />)
//     const checkbox = screen.getByLabelText('skills')
//     expect(checkbox).toBeInTheDocument()
//     expect(checkbox).toBeChecked()
//   })
// })

// ==========================================================

// describe('GetAllByLabelText testing v22',()=>{
//   test("Test mutiple input with same type by its label v22 ",()=>{
//     render(<App />)
//     const inputs = screen.getAllByLabelText('UserName')
//     for(let i=0; i<inputs.length; i++){
//       expect(inputs[i]).toBeInTheDocument()
//       expect(inputs[i]).toHaveValue()
//     }
//   })

//   test('Test multiple checkboxes with same type by its label v22',()=>{
//     render(<App />)
//     const checkboxes = screen.getAllByLabelText('Checkbox');
//     for(let i=0; i<checkboxes.length; i++){
//       expect(checkboxes[i]).toBeInTheDocument()
//       expect(checkboxes[i]).toBeChecked()
//     }
//   })
// })
// ==========================================================

// describe("GetByPlaceholderText & GetAllByPlaceholderText testing v23", () => {
// test("Test single input by its placeHolder v23 ", () => {
//   render(<App />);
//   const inputs = screen.getByPlaceholderText("Enter User name");
//   expect(inputs).toBeInTheDocument();
//   expect(inputs).toHaveValue("jay prakash");
// });

//   test('Test multiple checkboxes with same type by its label v22',()=>{
//     render(<App />)
//     const inputs = screen.getAllByPlaceholderText('Enter User name');
//     for(let i=0; i<inputs.length; i++){
//       expect(inputs[i]).toBeInTheDocument()
//       expect(inputs[i]).toHaveValue('jay prakash')
//     }
//   })

// });
// ==========================================================

// describe("GetByText & GetAllByPText testing v24", () => {
//   test("Test single div element v24 ", () => {
//     render(<App />);
//     const divTag = screen.getByText("TestByText");
//     expect(divTag).toBeInTheDocument();
//   });

//   test("Test single btn element v24 ", () => {
//     render(<App />);
//     const btn = screen.getByText("click");
//     expect(btn).toBeInTheDocument();
//   });

//   test("Test single paragraph element v24 ", () => {
//     render(<App />);
//     const pTag = screen.getByText("paragraph");
//     expect(pTag).toBeInTheDocument();
//   });

//   test("Test single paragraph element class v24 ", () => {
//     render(<App />);
//     const pTag = screen.getByText("paragraph");
//     // expect(pTag).toBeInTheDocument();
//     expect(pTag).toHaveClass("para");
//     expect(pTag).toHaveAttribute("id");
//   });

//   test("Test multiple heading element v24 ", () => {
//     render(<App />);
//     const h2Tag = screen.getAllByText("Heading tag");
//     for (let i = 0; i < h2Tag.length; i++) {
//       expect(h2Tag[i]).toBeInTheDocument();
//     }
//   });
// });
// ==========================================================

// configure({testIdAttribute:'element-testid'})

// describe("GetByTestId & GetAllByTestId testing v25, v26", () => {
// test("Test single testid v25 ", () => {
//   render(<App />);
//   const testid = screen.getByTestId("h-test-id");
//   expect(testid).toBeInTheDocument();
// });

//   test('Test multiple testid with same name v25',()=>{
//     render(<App />)
//     const testid = screen.getAllByTestId('h-test-id');
//     for(let i=0; i<testid.length; i++){
//       expect(testid[i]).toBeInTheDocument()
//     }
//   })

// })

// ==========================================================

// describe("GetByDisplayValue & GetAllByDisplayValue testing v27", () => {
//   test("Test single input value v27 ", () => {
//     render(<App />);
//     const inputValue = screen.getByDisplayValue("jay prakash");
//     expect(inputValue).toBeInTheDocument();
//   });
//   test("Test single textarea value v27 ", () => {
//     render(<App />);
//     const textarea = screen.getByDisplayValue("jay prakash");
//     expect(textarea).toBeInTheDocument();
//   });
//   // test("Test single radio input value v27 ", () => {
//   //   render(<App />);
//   //   const radio = screen.getByDisplayValue("male");
//   //   expect(radio).toBeInTheDocument();
//   // });

//   test('Test multiple radio input with same value v25',()=>{
//     render(<App />)
//     const radio = screen.getAllByDisplayValue('male');
//     for(let i=0; i<radio.length; i++){
//       expect(radio[i]).toBeInTheDocument()
//     }
//   })
// });

// ==========================================================

// describe("getbytile & GetAllByTitle testing v28", () => {
//   test("Test single btn by its title v28 ", () => {
//     render(<App />);
//     const btn = screen.getByTitle("press");
//     expect(btn).toBeInTheDocument();
//   });
//   // test("Test single symbol by its title v28 ", () => {
//   //   render(<App />);
//   //   const symbol = screen.getByTitle("symbol");
//   //   expect(symbol).toBeInTheDocument();
//   // });

//   test('Test multiple symbol with same title v28',()=>{
//     render(<App />)
//     const span = screen.getAllByTitle('symbol');
//     for(let i=0; i<span.length; i++){
//       expect(span[i]).toBeInTheDocument()
//     }
//   })
// });

// ==========================================================

// describe("GetByAltText & GetAllByAltText testing v29", () => {
//   // test("Test single image by its alt value v29 ", () => {
//   //   render(<App />);
//   //   const alt = screen.getByAltText("image");
//   //   expect(alt).toBeInTheDocument();
//   // });

//   test('Test multiple images by same alt value v29',()=>{
//     render(<App />)
//     const alt = screen.getAllByAltText('image');
//     for(let i=0; i<alt.length; i++){
//       expect(alt[i]).toBeInTheDocument()
//     }
//   })
// });

// ==========================================================

// describe("Assertion method testing v31", () => {
//   test("positive assertion method v31 ", () => {
//     render(<App />);
//     const alt = screen.getByRole("textbox");
//     expect(alt).toBeInTheDocument();
//     // expect(alt).toBeDisabled()
//     expect(alt).toBeEnabled() 
//     expect(alt).toHaveAttribute('id')
//     // expect(alt).toHaveValue()
//     expect(alt).toHaveValue('jay prakash')
//     // expect(alt).toBeDisabled()
//     expect(alt).toHaveClass('class1')
//     expect(alt).toHaveClass('class2')

//   });
//   test("Negative assertion method v31 ", () => {
//     render(<App />);
//     const alt = screen.getByRole("textbox");

//   });
// });




// ==========================================================

test("Text match with string and regex v32", () => {
  render(<String_redux />)
  const demo = screen.getByText(('testing with String and redux',{exact}))
  expect(demo).toBeInTheDocument()
});

