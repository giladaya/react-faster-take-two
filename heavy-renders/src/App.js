import React from "react";
import "./App.css";
import {fibonacci, updateStats} from "./helpers";
import NumberSlider from "./NumberSlider";
import ColorPicker from "./ColorPicker";

const COLORS = {
  Red: "#ff0000",
  Green: "#00cc00",
  Blue: "#0000ff",
  Gray: "#aaaaaa",
  Black: "#000000"
};

// Show Fibonacci numbers
function Fibonacci(props) {
  const { number, color } = props;
  const fiboNum = fibonacci(number);

  return (
    <div style={{ color }}>
      Fibonacci #{number}
      <br />
      <div style={{ fontSize: "3em" }}>{fiboNum}</div>
    </div>
  );
}

function App() {
  const [color, setColor] = React.useState(COLORS.Gray);
  const [number, setNumber] = React.useState(35);

  return (
    <div className="App">
      <div style={{ marginBottom: "2em" }}>
        <label>
          Color:{" "}
          <ColorPicker palette={COLORS} onChange={setColor} value={color} />
        </label>
        <br />
        <label>
          Number: <NumberSlider number={number} setNumber={setNumber} />
        </label>
      </div>

      <React.Profiler id="Fibonacci" onRender={updateStats}>
        <Fibonacci number={number} color={color} />
      </React.Profiler>
    </div>
  );
}

export default App;
