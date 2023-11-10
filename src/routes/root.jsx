import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav style={{ display: "flex" }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app">App</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>{" "}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Root;
