const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
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


  // const-definitions
  const Header = ({course}) => {
    return (
      <h1>{course.name}</h1>
    )
  }

  const Content = ({parts}) => {
    return (
      <>
        {
          parts.map(part => <Part part={part} />)
        }
      </>
    )
  }

  const Part = ({part}) => 
  {
    return (
      <p> {part.name} {part.exercises}</p>
    )
  }

  const Total = ({parts}) => {
    return (
      <p>
        Number of exercises {parts.reduce((acc, part) => acc + part.exercises, 0)}
      </p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App