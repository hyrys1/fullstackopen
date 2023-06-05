
const Header = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        {props.header}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p>
      <Part name={props.parts[0].name} ex={props.parts[0].ex}/>
      <Part name={props.parts[1].name} ex={props.parts[1].ex}/>
      <Part name={props.parts[2].name} ex={props.parts[2].ex}/>
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        Exercise total = {props.parts[0].ex + props.parts[1].ex + props.parts[2].ex}
      </p>
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        {props.name} <br />
        Exercises {props.ex}
      </p>
    </div>
  )
}
//<Header head={course}/>
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
      name: 'Fundamentals of React',
      ex: 10
      },
      {
      name: 'Using props to pass data',
      ex: 7
      },
      {
      name: 'State of a component',
      ex: 14
      }
    ]
  }

  return (
    <div>
      <Header header={course.name} />
      <Content parts = {course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
//Header
//Content
//Total
export default App