import React from "react";
import ReactDOM from "react-dom";
const heading = React.createElement(
  "h1",
  { className: "hitme" },
  "Hey! this is used by React CDN link this is save check "
);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
