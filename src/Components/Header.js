import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btn, setbtn] = useState("Login");
  let online = useOnlineStatus();
  return (
    <div className="flex flex-wrap justify-between border border-solid border-gray-300">
      <img
        className="h-16 p-2"
        alt="logo-img"
        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ul className="Header-list flex p-4">
        <li
          style={{
            color: online ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {online ? "Online" : "Offline"}
        </li>
        <li className="px-4">
          <Link to="/"> Home </Link>
        </li>
        <li className="px-4">
          <Link to="/About"> About </Link>
        </li>
        <li className="px-4">
          <Link to="/Grocery"> Grocery </Link>
        </li>
        <li className="px-4">
          <Link to="/Contact"> Contact </Link>
        </li>
      </ul>
      <button
        className="py-4 px-6"
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
