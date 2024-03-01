import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  let online = useOnlineStatus();
  return (
    <div className="Header">
      <img
        className="logo-img"
        alt="logo-img"
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ul className="Header-list">
        <li
          style={{
            color: online ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {online ? "Online" : "Offline"}
        </li>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/About"> About </Link>
        </li>
        <li>
          <Link to="/Grocery"> Grocery </Link>
        </li>
        <li>
          <Link to="/Contact"> Contact </Link>
        </li>
      </ul>
      <button
        className="login"
        onClick={() => {
          btn === "Login" ? setbtn("Logout") : setbtn("Login");
        }}
      >
        {" "}
        {btn}{" "}
      </button>
    </div>
  );
};
export default Header;
