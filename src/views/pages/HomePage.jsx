// Default
import React from "react";
import { Link, Outlet } from "react-router-dom";

const navLinks = [
  { link: "/get-all-products", title: "Get all products" },
  { link: "/get-single-product", title: "Get single product" },
  { link: "/add-product", title: "Add product" },
  { link: "/delete-product", title: "Delete product" },
  { link: "/update-product", title: "Update product" },
];

const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <h2>
          <Link to="/">HomePage</Link>
        </h2>
        <ul>
          {navLinks?.map(({ link, title }, idx) => (
            <li key={idx} style={{ margin: "15px 10px" }}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
