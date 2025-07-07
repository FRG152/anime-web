"use client";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RootState } from "@/store/store";
import { setInputValue } from "@/store/anime/animeSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) => state.anime.inputValue);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (inputValue) {
      params.set("filter", inputValue);
    } else {
      params.delete("filter");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <form onSubmit={handleSearch} className="container__search">
      <Input
        type="text"
        name="filter"
        value={inputValue || ""}
        className="border-none"
        placeholder="Search for your anime..."
        onChange={(e) => dispatch(setInputValue(e.target.value))}
      />
      <Button
        type="submit"
        variant="outline"
        className="w-20 text-lg rounded-none"
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
