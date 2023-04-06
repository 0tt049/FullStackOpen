function Header(props: { title: string } ) {
  return (
    <h1>{props.title}</h1>
  )
}

interface PartType {
  [key: string]: string | number;
}

function Part(props: PartType) {
  return (
    <li>{props.subtitle} - {props.number}</li>
  )
}

function Content(props: PartType) {
  return (
    <ul>
      <Part subtitle={props.part1} number={props.exercises1} />
      <Part subtitle={props.part2} number={props.exercises2} />
      <Part subtitle={props.part3} number={props.exercises3} />
    </ul>
  )
}

function Total(props: {[key: string]: number}) {
  return (
    <p>
      Total number: {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises2: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises3:  14
  }

  return (
    <div>
      <Header title={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App
