import { useState } from "react";
import "./App.css";

function App() {
  const [bg, setBg] = useState("");

  function changeBg(color) {
    color === "default" ? setBg("") : setBg(color);
  }

  return (
    <>
      <div className="bg-indigo-950 h-screen pt-8" style={{backgroundColor : bg && bg}}>
        <div
          id="heading"
          className="bg-indigo-950 w-fit px-8 py-4 mx-auto rounded-full border-4 border-amber-300 shadow-lg"
        >
          <h1 className="text-amber-300 text-3xl font-mono underline">
            bg-changer-app-react
          </h1>
        </div>

        <div id="button_container" className=" flex flex-col w-max gap-16 ml-4">
          <button onClick={() => {changeBg("red")}} className="px-2 rounded-full text-xl text-amber-300 border-2 border-amber-300 hover:bg-indigo-700 active:bg-indigo-800">Red</button>
          <button onClick={() => {changeBg("green")}} className="px-2 rounded-full text-xl text-amber-300 border-2 border-amber-300 hover:bg-indigo-700 active:bg-indigo-800">Green</button>
          <button onClick={() => {changeBg("blue")}} className="px-2 rounded-full text-xl text-amber-300 border-2 border-amber-300 hover:bg-indigo-700 active:bg-indigo-800">Blue</button>
          <button onClick={() => {changeBg("yellow")}} className="px-2 rounded-full text-xl text-amber-300 border-2 border-amber-300 hover:bg-indigo-700 active:bg-indigo-800">Yellow</button>
          <button onClick={() => {changeBg("white")}} className="px-2 rounded-full text-xl text-amber-300 border-2 border-amber-300 hover:bg-indigo-700 active:bg-indigo-800">White</button>
          <button onClick={() => {changeBg("default")}} className="px-2 rounded-full text-xl text-amber-300 border-2 border-amber-300 hover:bg-indigo-700 active:bg-indigo-800">Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
