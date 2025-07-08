"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RootState } from "@/store/store";
import { setInputValue } from "@/store/anime/animeSlice";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "lucide-react";

const SearchComponent = () => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) => state.anime.inputValue);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (inputValue) {
      params.set("filter", inputValue);
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <form onSubmit={handleSearch} className="container__search">
      <Input
        type="text"
        name="filter"
        value={inputValue || ""}
        className="bg-[#252525b4] border-none"
        placeholder="Search"
        onChange={(e) => dispatch(setInputValue(e.target.value))}
      />
      <Button
        type="submit"
        className="bg-red-500 border-none transition-all hover:bg-red-700"
      >
        <Search color="#fff" />
      </Button>
    </form>
  );
};

export default SearchComponent;
