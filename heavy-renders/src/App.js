import React from 'react';
import './App.css';

function isPrime(n) {
  if (n <= 1) {
      return false;
  }
  else {
      // We only need to check up to the sqrt of the number.
      for (let i=2; i*i<=n; i++) {
          if (n % i === 0) {
              // This number is evenly divisible by i, so it is not prime.
              return false;
          }
      }
  }
  
  return true;
}

/**
* @param {number} n
* @return {number}
*/
function countPrimes(n) {
  let result = 0;
  
  for (let i=0; i<n; i++) {
      if (isPrime(i)) {
          result++;
      }
  }
  
  return result;
};

function Primes(props) {
  const {number, color} = props;
  const primesCount = countPrimes(number);

  return (
    <div style={{color}}>
      Between 0 and {number} there are<br/>
      <div style={{fontSize: '3em'}}>{primesCount}</div>
      Primes
    </div>
  )
}

function Range(props) {
  const {number, setNumber, step = 10000} = props;
  return (
    <>
      <button onClick={()=> setNumber(number - step)}>-</button>
      <input 
        type="range" 
        value={number}
        min={0}
        max={1000000}
        step={step}
        onChange={(ev) => setNumber(ev.target.value)}
      />
      <button onClick={()=> setNumber(number + step)}>+</button>
    </>
  )
}

function App() {
  const [color, setColor] = React.useState('#aaaaaa');
  const [number, setNumber] = React.useState(100000);

  return (
    <div className="App">
      <div style={{marginBottom: '2em'}}>
        <label>
          Color: <input 
            type="color" 
            value={color}
            onChange={(ev) => setColor(ev.target.value)}
          />
        </label><br/>
        <label>
          Max: <Range
            number={number}
            setNumber={setNumber}
          />
        </label>
      </div>
      <Primes number={number} color={color}/>
    </div>
  );
}

export default App;
