
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
      <Part name={props.name1} ex={props.ex1}/>
      <Part name={props.name2} ex={props.ex2}/>
      <Part name={props.name3} ex={props.ex3}/>
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        Exercise total = {props.num1 + props.num2 + props.num3}
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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header header={course} />
      <Content name1={part1} name2={part2} name3={part3} ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
      <Total num1={exercises1} num2={exercises2} num3={exercises3}/>
      
    </div>
  )
}
//Header
//Content
//Total
export default App