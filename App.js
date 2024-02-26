import React from "react";
import ReactDOM from "react-dom/client";
// refer notebook
const Header = () => {
  return (
    <div className="Header">
      <img
        className="logo-img"
        alt="logo-img"
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ul className="Header-list">
        <li>About</li>
        <li>Cart</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
const Card = () => {
  return (
    <div className="card">
      <img
        className="card-img"
        alt="card-image"
        src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
      />
      <div className="insidecardtext">
        <h4>Swiggy Stores</h4>
        <h4>Anyting</h4>
        <h4>40 min</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="Body-Container">
      <input
        alt="search"
        className="search-bar"
        type="search"
        placeholder="Search"
      />
      <div className="Res-container">
        <Card />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
