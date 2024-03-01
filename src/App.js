import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Restaurant from "./Components/Restaurant";
//import Grocery from "./Components/Grocery";

// this is known as dynmaic importing to implement the code splitting and optimize the website
// we delete the conventional importing type and implement as shown below

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  let { id } = useParams();
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "About",
        element: <About></About>,
      },
      {
        path: "Contact",
        element: <Contact></Contact>,
      },
      {
        path: "Grocery",
        element: (
          <Suspense
            fallback={<h1>Your Component is in process, Please wait.....</h1>}
          >
            <Grocery></Grocery>
          </Suspense>
        ),
      },
      {
        path: ":id",
        element: <Restaurant></Restaurant>,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
