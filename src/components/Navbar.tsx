"use client";

import Link from "next/link";
import React from "react";
import Search from "./Search";
import { AnimeData } from "@/types";
import { usePathname, useRouter } from "next/navigation";

const Navbar = ({ categories }: { categories: AnimeData[] }) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleCategories = (category: string) => {
    const params = new URLSearchParams();
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category", category);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="container__navbar">
      <div className="navbar__content-left">
        <Link href={"/"} className="navbar__logo">
          AMIVERS
        </Link>
        <ul className="navbar__links">
          {categories.map((category: AnimeData) => (
            <li
              key={category.id}
              onClick={(text) =>
                handleCategories((text.target as HTMLLIElement).innerText)
              }
              className="navbar__link"
            >
              {category.attributes.title}
            </li>
          ))}
        </ul>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
