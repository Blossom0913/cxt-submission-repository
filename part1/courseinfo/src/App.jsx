import { useState } from 'react'


const App = () => {

  const [counter, setCounter] = useState(0)
  
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  
  // const-definitions
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Display counter={counter} />
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
}

const Header = (props) => {
  // console.log(props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  const layout = props.parts.map(part => 
     <p>{part.name} {part.exercises}</p>
  )
  return layout 
    
}

const Total = (props) => {
  let sum = 0
  for (let i = 0; i < props.parts.length; i++) {
    sum += props.parts[i].exercises
  }
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}



export default App
