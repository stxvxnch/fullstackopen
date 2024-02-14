const Header = (props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.parts.part} {props.parts.excercise}</p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  )
}

const Total = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Total of excercises {props.parts[0].excercise + props.parts[1].excercise + props.parts[2].excercise}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      part: "Fundamentals of React", 
      excercise: 10
    },

    {
      part: "Using props to pass data",
      excercise: 7
    },

    {
      part: "State of a component",
      excercise: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App