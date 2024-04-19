const Header = (props) => {
  
  return(
  <div>
    <h1> {props.title} </h1>
  </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <Part part = {props.part[0].name} exercise={props.part[0].exercises}/>
      <Part part = {props.part[1].name} exercise={props.part[1].exercises}/>
      <Part part = {props.part[2].name} exercise={props.part[2].exercises}/>
    </div>
    
  )
}

const Total = (props) => {
  console.log
  return (
    <div>
      <p>Number of exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
    </div>
  )
}

const Part = (props) => {
  
  return(
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const App = () => {
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
  return(
    <div>
      <Header title = {course.name} />
      <Content part = {course.parts}/>
      <Total total = {course.parts}/>
    </div>
  )
}

export default App
