import react from "react";

const Hello = () => {
  return (
    // <div>
    //   <h1>Hello this is JSX</h1>
    // </div>

    react.createElement(
      "div",
      null,
      react.createElement("h1", null, "hello wothout jsx")
    )
  );
};

export default Hello;
