import Card from "./Card";
import obj from "../utils/obj";
import { useState, useEffect } from "react";

const Body = () => {
  const [list, setList] = useState(obj);
  const [search, setSearch] = useState("");
  const [filterlist, setfilterlist] = useState([]);
  const fetchdata = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.3032736&lng=81.3607971&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    let arr = data.data.cards;
    arr = arr.filter((obj) => obj?.card?.card?.id == "restaurant_grid_listing");
    //console.log(arr);
    let k = arr[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(k);
    setList(k);
    setfilterlist(k);
  };
  useEffect(() => {
    fetchdata();
  });
  const handler = () => {
    // newlist = list.filter((obj) => {
    //   return (obj.info.name).toLowerCase().includes(search.toLowerCase());
    // });
    // setfilterlist(newlist);
  };
  return (
    <div className="Body-Container">
      <input
        alt="search"
        className="search-bar"
        type="search"
        placeholder="Search"
        onChange={(event) => {
          console.log(event.target.value);
          setSearch(event.target.value);
        }}
      />
      <button
        className="search-btn"
        style={{ margin: "10 px" }}
        onClick={handler()}
      >
        {" "}
        Go{" "}
      </button>
      <div className="Res-container">
        {list.map((object, index) => (
          <Card key={object.info.id} {...object} />
        ))}
      </div>
    </div>
  );
};

export default Body;
