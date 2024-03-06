import Card from "./Card";
import obj from "../utils/obj";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
const Body = () => {
  const [list, setList] = useState(obj);
  const [search, setSearch] = useState("");
  const [filterlist, setfilterlist] = useState([]);
  let online = useOnlineStatus();
  const fetchdata = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    //console.log(data);

    // let gsoc2023 = await fetch(
    //   "https://summerofcode.withgoogle.com/api/program/2023/organizations/"
    // );
    // gsoc2023 = await gsoc2023.json();
    // gsoc2023 = gsoc2023.map((obj) => {
    //   return obj?.name;
    // });
    // let gsoc2024 = await fetch(
    //   "https://summerofcode.withgoogle.com/api/program/2024/organizations/"
    // );
    // gsoc2024 = await gsoc2024.json();
    // gsoc2024 = gsoc2024.map((obj) => {
    //   return obj?.name;
    // });
    // console.log(gsoc2023);
    // console.log(gsoc2024);
    // const st = new Set(gsoc2023);
    // const desiredorg = gsoc2024.filter((s) => {
    //   return !st.has(s);
    // });
    // console.log(desiredorg);

    let arr = data?.data?.cards;
    //console.log("iamarr");
    //console.log(arr);
    arr = arr.filter(
      (obj) => obj?.card?.card?.header?.title == "Top restaurant chains in Pune"
    );
    //console.log(arr);
    let k = arr[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //console.log(k);
    setList(k);
    setfilterlist(k);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  const handler = () => {
    const newFilterList = list.filter((obj) => {
      return (obj?.info?.name).toLowerCase().includes(search.toLowerCase());
    });
    setfilterlist(newFilterList);
  };
  return !online ? (
    <Offline />
  ) : (
    <div className="flex flex-wrap">
      <input
        alt="search"
        className="search-bar"
        type="search"
        placeholder="Search"
        onChange={(event) => {
          //console.log(event.target.value);
          setSearch(event.target.value);
        }}
      />
      <button
        className="search-btn"
        style={{ margin: "10 px" }}
        onClick={handler}
      >
        {" "}
        Go{" "}
      </button>
      <div className="flex flex-wrap">
        {list?.map((object, index) => (
          <Link to="/1" key={object.info.id}>
            <Card {...object} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
