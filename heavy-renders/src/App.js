import React from "react";
import "./App.css";
import NumberSlider from './NumberSlider';
import ColorPicker from './ColorPicker';

const COLORS = {
  Red: "#ff0000",
  Green: "#00cc00",
  Blue: "#0000ff",
  Gray: "#aaaaaa",
  Black: "#000000"
};

function updateStats(
  id, // the "id" prop of the Profiler tree that has just committed
  _phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  _startTime, // when React began rendering this update
  _commitTime, // when React committed this update
  _interactions // the Set of interactions belonging to this update
) {
  console.log(`${id} update: ${actualDuration.toFixed(3)}ms`);
}

// Recursive calculate Fibonacci numbers
// Intentionally inefficient ( O(2^n) )
function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

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
          Color: <ColorPicker palette={COLORS} onChange={setColor} value={color} />
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
