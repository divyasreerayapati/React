// Hello.js
import React from "react"; // Import React
// No need to import Component separately

const Hello = () => {
  return (
    <div>
      <h1>Hello this is JSX</h1>
    </div>
  );
};

const example1 = () => {
  return <h1>This is an example of functional component</h1>;
};

class example2 extends React.Component {
  // Extend React.Component
  render() {
    return <h2>This is an example of class component</h2>;
  }
}

export { example1, example2 }; // Export named components
export default Hello; // Export default Hello component
