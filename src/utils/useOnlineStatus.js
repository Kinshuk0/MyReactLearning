import { useState, useEffect } from "react";
const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnline(false);
      console.log("You are offline");
    });
    window.addEventListener("online", (event) => {
      setOnline(true);
      console.log("You are online");
    });
  }, []);
  return online;
};
export default useOnlineStatus;
