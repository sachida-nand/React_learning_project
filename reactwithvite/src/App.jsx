import { useState } from "react"
import Card from "./components/Card"



function App() {

  const [counter, setCounter] = useState(1);

  const addNumber = () => {
    console.log("clicked");
    setCounter(counter + 1);
  }

  const subNumber = () => {
    console.log("clicked");
    setCounter(counter - 1);
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <h1>Counter {counter}</h1>
        <button onClick={addNumber}>Add Value</button><br></br>
        <button onClick={subNumber}>Sub Value</button>
      </div>
    </>
  )
}

export default App
