// Default
import React from "react";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <h2>
          <Link to="/">HomePage</Link>
        </h2>
        <ul>
          <li>
            <Link to="/example-get">Example Get</Link>
          </li>
          <li>
            <Link to="/example-post">Example Post</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
