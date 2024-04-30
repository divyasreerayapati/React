import React from "react";
import "./App.css";
import Greet, { meeting } from "./components/Greet"; // Correct import syntax for named exports
import Welcome, { dummyvar } from "./components/Welcome"; // Correct import syntax for named exports
import Hello, { example1, example2 } from "./components/Hello"; // Correct import syntax for named exports
import Propss from "./components/Propss";
import { myco } from "./components/Propss";
function App() {
  return (
    <div className="App">
      {/* <Greet />
      {meeting()}
      <Welcome />
      {dummyvar()}
      <Hello />
      {example1()}
      <example2 /> Use as a self-closing tag */}

      <Welcome name="Diana" heroname="supernam" />
      <Welcome name="Bracely" heroname="batsman"></Welcome>

      <Propss name="Diana" heroname="supernam">
        <p>This is children prop</p>
      </Propss>
      <Propss name="Bracely" heroname="batsman">
        <button>Action</button>
      </Propss>
      <Propss name="Leku" heroname="superwonmen" />

      {myco("susu")}
    </div>
  );
}

export default App;
