import React from "react";

const Propss = (prop) => {
  console.log(prop);
  return (
    <div>
      <h1>
        hello {prop.name} and {prop.heroname}
      </h1>
      {prop.children}
    </div>
  );
};

export const myco = (myself) => {
  console.log(myself);
  return <h2>My name is {myself}</h2>;
};
export default Propss;
