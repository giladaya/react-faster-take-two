import React from "react";
import "./App.css";

const COLORS = {
  Red: "#ff0000",
  Green: "#00cc00",
  Blue: "#0000ff",
  Gray: "#aaaaaa",
  Black: "#000000"
};

// Recursive calculate Fibonacci numbers
// Intentionally inefficient ( O(2^n) )
function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Show Fibonacci numbers
function Fibonacci(props) {
  const { number, color } = props;
  const fiboSum = fibonacci(number);

  return (
    <div style={{ color }}>
      Fibonacci #{number}
      <br />
      <div style={{ fontSize: "3em" }}>{fiboSum}</div>
    </div>
  );
}

// Numeric range slider
function Range(props) {
  const { number, setNumber, step = 1 } = props;
  return (
    <>
      <button onClick={() => setNumber(number - step)}>-</button>
      <input
        type="range"
        value={number}
        min={0}
        max={50}
        step={step}
        onChange={ev => setNumber(ev.target.value)}
      />
      <button onClick={() => setNumber(number + step)}>+</button>
    </>
  );
}

// Single color picker
function ColorPicker(props) {
  const { onChange, value } = props;

  const handleChange = ev => onChange(ev.target.value);
  return (
    <>
      {Object.keys(COLORS).map(color => (
        <label key={color}>
          <input
            type="radio"
            name="color"
            value={COLORS[color]}
            checked={value === COLORS[color]}
            onChange={handleChange}
          />
          {color}
        </label>
      ))}
    </>
  );
}

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

function App() {
  const [color, setColor] = React.useState(COLORS.Gray);
  const [number, setNumber] = React.useState(30);

  return (
    <div className="App">
      <div style={{ marginBottom: "2em" }}>
        <label>
          Color: <ColorPicker onChange={setColor} value={color} />
        </label>
        <br />
        <label>
          Number: <Range number={number} setNumber={setNumber} />
        </label>
      </div>
      <React.Profiler id="Fibonacci" onRender={updateStats}>
        <Fibonacci number={number} color={color} />
      </React.Profiler>
    </div>
  );
}

export default App;
