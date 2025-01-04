import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  // ...
  let all = good + neutral + bad

  let average = (good - bad) / all 

  let positive = (good / all) * 100

  if (all === 0) { 
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <StatisticsLine text="Good" value={good} />
      <StatisticsLine text="Neutral" value={neutral} />
      <StatisticsLine text="Bad" value={bad} />
      <StatisticsLine text="All" value={all} /> 
      <StatisticsLine text="Average" value={average.toFixed(5)} />
      <StatisticsLine text="Positive" value={positive.toFixed(5)} /> 
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  
  

 

  return (
    <div>
      <Header text="Give feedback" />
      <Button text="Good" onClick={() => setGood(good + 1)} />
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => setBad(bad + 1)} />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  ) 
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
        <th>{text}</th>
        <td>{value}</td>
    </tr>
    
  )
}
export default App