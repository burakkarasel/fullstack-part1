export const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  console.log(course);
  return (
    <div className="App">
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      {props.content.map((part, idx) => (
        <Part name={part.name} exercises={part.exercises} key={idx} />
      ))}
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.content.reduce((a, t) => a + t.exercises, 0)}
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};
