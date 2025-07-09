"use client";

import Link from "next/link";
import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="container__navbar">
      <div className="navbar__content-left">
        <Link href={"/"} className="navbar__logo">
          AMIVERS
        </Link>
        <ul className="navbar__links">
          <li>
            <a href="#home" className="navbar__links">
              Home
            </a>
          </li>
          <li>
            <a href="#animes" className="navbar__links">
              Animes
            </a>
          </li>
        </ul>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
