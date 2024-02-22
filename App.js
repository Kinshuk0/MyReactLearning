import React from "react";
import ReactDOM from "react-dom/client";

const Y = () => {
  return <div className="h1">This is Kinshuk</div>;
};
const z = <h1>I am text inside Y</h1>;
const X = () => {
  return (
    <Y>
    </Y>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<X />);
