import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  return (
    <>
      <h1>statistics</h1>
      {all === 0 ? <p>No feedback given</p> : 
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={all} />
            <StatisticsLine text="average" value={all === 0 ? 0 : (good-bad) / (all)} />
            <StatisticsLine text="positive" value={all === 0 ? 0 : (good / all) * 100 + " %"} />
          </tbody>
          {/* <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {all === 0 ? 0 : (good-bad) / (all)}</p>
          <p>positive {all === 0 ? 0 : (good / all) * 100} %</p> */}
        </table>
      }
    </>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  // const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)

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
    // setAverage((newGood - newBad) / (newAll));
    // setPositive((newGood / (newAll)) * 100);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleIncrement(1)}>good</button>
      <button onClick={() => handleIncrement(0)}>neutral</button>
      <button onClick={() => handleIncrement(-1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}

export default App