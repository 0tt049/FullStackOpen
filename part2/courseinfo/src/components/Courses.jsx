import { Fragment } from "react";

const Header = ({ name }) => (<h2>{name}</h2>);

const Part = ({ course }) => { return (course.map(part => <li key={part.id}>{part.name} - {part.exercises}</li>)) };

const Course = ({ courses }) => {
  return (
    courses.map(course =>
      <Fragment key={course.id}>
        <Header name={course.name} />
        <Part course={course.parts} />
        <p>Total: {course.parts.reduce((acc, curr) => acc + curr.exercises, 0,)}</p>
      </Fragment>
    )
  )
};

const Courses = ({ courses }) => {
  return (
    <>
      <h1>Web Development Course!</h1>
      <Course courses={courses} />
    </>
  )
};

export default Courses
