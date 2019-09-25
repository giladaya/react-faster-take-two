import React from "react";
import "./App.css";

const MAX_LEVELS = 2;

function Counter(props) {
  const { label, count, setCount } = props;
  console.log(`Render Counter ${label}`);
  return (
    <div>
      {label} Count: {count}{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

function CountLevel(props) {
  const { label, count, setCount, level } = props;
  return (
    <>
      <Counter label={`${label}.`} count={count} setCount={setCount} />
      {level < MAX_LEVELS && <Level label={`${label}.`} level={level + 1} />}
    </>
  );
}

function Level(props) {
  const { level, label } = props;
  if (label) {
    console.log(`Render Level ${label}`);
  } else {
    console.log(`Render root`);
  }

  const [countA, setCountA] = React.useState(0);
  const [countB, setCountB] = React.useState(0);

  // const setCountLog = (count) => {
  //   console.log('setCountA', count);
  //   setCountA(count);
  // }

  return (
    <div style={{ paddingLeft: `2em` }}>
      <MCountLevel
        label={`${label}a`}
        count={countA}
        setCount={setCountA}
        level={level}
        key={`${label}a`}
      />
      <MCountLevel
        label={`${label}b`}
        count={countB}
        setCount={setCountB}
        level={level}
        key={`${label}b`}
      />
    </div>
  );
}

const MCountLevel = CountLevel;
// const MCountLevel = React.memo(CountLevel);

function App() {
  return (
    <div className="App">
      <h1>Reconciliation Demo</h1>
      Root<br/>
      <Level level={0} label={""} />
    </div>
  );
}

export default App;
