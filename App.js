const heading = React.createElement(
  "h1",
  { className: "hitme" },
  "Hey! this is used by React CDN link"
);
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
