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
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
