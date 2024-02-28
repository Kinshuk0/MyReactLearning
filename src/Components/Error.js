import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OOPs Something went wrong</h1>
      <h1>{error.message}</h1>
    </div>
  );
};

export default Error;
