import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <div className="row mx-auto justify-content-center align-items-center">
          <div className="w-25">
            <header>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark border border-2 border-info border-start-0"
                    : "nav-link text-dark"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark border border-2 border-info border-start-0"
                    : "nav-link text-dark"
                }
              >
                Shop
              </NavLink>
            </header>
          </div>
          <div
            className="w-75 content border-info border-2"
            style={{ minHeight: "75vh" }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}
