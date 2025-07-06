"use client";

import { getData } from "@/store/anime/animeSlice";
import { RootState } from "@/store/store";
import { AnimeData } from "@/types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";

const AnimeList = () => {
  const data = useSelector((state: RootState) => state.anime.data);
  const dispatch = useDispatch();

  const fetchAnimeList = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/anime");
      if (!response.ok) {
        throw new Error("Failed to fetch anime list");
      }
      const data = await response.json();
      dispatch(getData(data.data));
    } catch (error) {
      console.error("Error fetching anime list:", error);
    }
  };

  useEffect(() => {
    // fetchAnimeList();
  }, []);

  return (
    <div className="container__list">
      {data.map((item: AnimeData) => (
        <Card key={item.mal_id} data={item} />
      ))}
    </div>
  );
};

export default AnimeList;
