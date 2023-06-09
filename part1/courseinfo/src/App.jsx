const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <li>{props.name} - {props.number}</li>
  )
}

const Content = (props) => {
  return (
      <ul>
        <Part name={props.part1} number={props.exercises1}/>
        <Part name={props.part2} number={props.exercises2}/>
        <Part name={props.part3} number={props.exercises3}/>
      </ul>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
    Total number: {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header name={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </>
  )
}

export default App
