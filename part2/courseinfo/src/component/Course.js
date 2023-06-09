const Header = ({ course }) => {
    return (<h1>{course}</h1>)
}

 const Content = (props) => {
    const contentElement = props.parts.map((part) => {
        return(
            <Part part={part.name} exercise={part.exercises} />
        )
    })
   return (
     <div>
       {contentElement}
     </div>
 
   )
 }
 
 const Part = ({ part, exercise }) => {
   return (<p>{part} {exercise}</p>)
 }
 
 const Total = (props) => {
   const sum = props.parts.reduce((sum,part) => sum + part.exercises,0)
   return (
     <p>Total of {sum} exercises</p>
   )
 }

const Course = (course) => {
    const compElements = course.course.map((item) => {
        return (
            <div key={item.id}>
                <Header course={item.name} />
                <Content parts={item.parts} />
                <Total parts={item.parts} />
            </div>
        )
    })
    return (
        <div>
            {compElements}
            <Header course={course.course.name} />
            {/* <Content parts={course.course.parts} />
          <Total parts={course.course.parts} /> */}
        </div>
    )
}

export default Course