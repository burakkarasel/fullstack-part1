import { useState } from "react";

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

  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const resetCounter = () => setCounter(0);

  return (
    <div className="App">
      <Header courseName={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts} />
      <DisplayCounter counter={counter} />
      <CounterButton onClick={increaseByOne} text={"increase"} />
      <CounterButton onClick={resetCounter} text={"reset"} />
      <CounterButton onClick={decreaseByOne} text={"decrease"} />
    </div>
  );
};

const Header = ({ courseName }) => {
  console.log(courseName);
  return <h1>{courseName}</h1>;
};

const Content = ({ content }) => {
  return (
    <div>
      {content.map((part, idx) => (
        <Part name={part.name} exercises={part.exercises} key={idx} />
      ))}
    </div>
  );
};

const Total = ({ content }) => {
  console.log(content);
  return (
    <p>Number of exercises {content.reduce((a, t) => a + t.exercises, 0)}</p>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const DisplayCounter = ({ counter }) => {
  console.log(counter);
  return (
    <div>
      <h3>{counter}</h3>
    </div>
  );
};

const CounterButton = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};
