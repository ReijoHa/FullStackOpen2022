const Header = (props) => {
    return (
      <div>
        <h2>{props.course}</h2>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
        <p>{props.part.name} {props.part.exercises}</p>
      </div>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.parts.map(part =>
          <Part key={part.id} part={part}/>)}
      </div>
    )
  }
  
  const Total = (props) => {
    const value = props.parts.reduce(
      (total, current) => total + current.exercises, 0)
    return (
      <div>
        <p><b>total of {value} exercises</b></p>
      </div>
    )
  }
  
  const Course = (props) => {
    return (
      <div>
        <Header course={props.course.name}/>
        <Content parts={props.course.parts}/>
        <Total parts={props.course.parts}/>
      </div>
    )
  }

  export default Course