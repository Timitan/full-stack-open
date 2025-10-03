import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleIncrement = (type) => {
    let newGood = good;
    let newBad = bad;
    // Handle different states
    if(type === -1) {
      setBad(bad + 1);
      newBad = bad + 1;
    } 
    else if(type === 0) {
      setNeutral(neutral + 1);
    } 
    else {
      setGood(good+1);  
      newGood = good + 1;
    }

    // Handle additional states
    let newAll = all + 1;
    setAll(newAll)
    setAverage((newGood - newBad) / (newAll));
    setPositive((newGood / (newAll)) * 100);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleIncrement(1)}>good</button>
      <button onClick={() => handleIncrement(0)}>neutral</button>
      <button onClick={() => handleIncrement(-1)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default App