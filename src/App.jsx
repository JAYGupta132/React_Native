import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)
  
  const handleCopyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
    if (number) str += "0123654789";
    if (character) str += "!@#$%^&*()-=_+[]}{~`";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [number, character, length, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [number, character, length]);
  return (
    <div className="w-full text-orange-500 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow  rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          ref={passwordRef}
          readOnly
        />
        <button onClick={handleCopyPassword} className="bg-blue-700 px-3 py-1 text-white ">copy</button>
      </div>
      <div className="flex text-sm  gap-x-2 justify-between">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointer"
            min={0}
            max={100}
            onChange={(e) => setLength(e.target.value)}
            defaultValue={length}
          />
          <label>Length ({length})</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            defaultChecked={number}
            onChange={() => setNumber(!number)}
          />
          <label>Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            value={number}
            onChange={() => setCharacter(!character)}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
