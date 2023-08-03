import {
  React,
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null);
  const inputRef2 = useRef(null)
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0);

  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
    setResult((result) => result + Number(inputRef2.current.value));
  }; 
 
  function minus(m) {
    m.preventDefault();
    setResult((result) => result = Number(inputRef2.current.value) - Number(inputRef.current.value));
  	// Add the code for the minus function 
  };
 
  function times(t) {
    t.preventDefault();
    setResult((result) => result = Number(inputRef2.current.value) * Number(inputRef.current.value));
    // Add the code for the plus function 
  }; 
 
  function divide(e) {
    e.preventDefault();
    setResult((result) => result = Number(inputRef.current.value) / Number(inputRef2.current.value));
    // Add the code for the divide function 
  };
 
  function resetInput(e) {
    clearform.current.reset();
    // Add the code for the resetInput function 
  }; 
 
  function resetResult(e) {
    clearform.current.reset();
  	// Add the code for the resetResult function 
  };
  
  
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number"
        />
        <input
          pattern="[0-9]" 
          ref={inputRef2} 
          type="number" 
          placeholder="Please type again"
        />

        <h2> Result {result} </h2>
        <button onClick={plus}>Add</button> 
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button> 
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App; 
