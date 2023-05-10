import Courses from "./components/Courses"

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 3
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 4
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 5
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 6
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 7
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 8
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

export default App
