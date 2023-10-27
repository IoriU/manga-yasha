"use client";
import MyButton from "@/app/components/button.comp";
import MyInputFieldIcon from "@/app/components/input-icon.comp";
import { FaPlus } from "react-icons/fa";
import React from "react";
import Spinner from "./Spinner";
import MangaSearchCard from "./components/manga-search-card.comp";
import Image from "next/image";

const AddManga = () => {
  const [resultManga, setResultManga] = React.useState<SearchManga[]>([]);
  const [manga, setManga] = React.useState<Manga>();
  const [isLoading, setIsLoading] = React.useState(false);

  const onSearch = async (event: React.FormEvent, searchData: string) => {
    event.preventDefault();

    if (manga) setManga(undefined);

    setIsLoading(true);
    await fetch(`https://api.consumet.org/manga/mangadex/${searchData}}`)
      .then((res) => res.json())
      .then((data) => {
        setResultManga([]);

        setResultManga((prevManga) => {
          // Map over data.results and add new items to the previous state
          return [
            ...prevManga,
            ...data.results.map((manga: any) => ({
              id: manga.id,
              title: manga.title,
            })),
          ];
        });
      });
    setIsLoading(false);
  };

  const onSearchClick = (selectedManga: Manga) => {
    setManga(selectedManga);
    //console.log(selectedManga);
  };

  return (
    <div className="flex flex-col h-full rounded-lg shadow-lg -mt-4 m-4 ">
      {/* Header Section */}
      <div className="flex flex-col rounded-t-lg bg-blue-400">
        <div className="flex flex-row justify-between p-4">
          <h1 className="text-white text-2xl font-bold">Add Manga</h1>
          <MyButton
            title={"Add Manual"}
            icon={<FaPlus />}
            color={"bg-orange-400"}
          />
        </div>
      </div>
      {/* Main Function */}
      <div className="flex flex-col m-4">
        <h2 className="flex -mt-2 m-1 font-semibold">
          Choose Manga From Consume API
        </h2>

        {/* Search Manga From API */}
        <MyInputFieldIcon onSearch={onSearch} />

        {/* Divider */}
        <span className="flex my-4 border-b bg-gra" />

        {/* Choose Manga From Database */}
        {isLoading ? (
          <div className="flex h-80 w-full justify-center items-center">
            <Spinner />
          </div>
        ) : !isLoading && manga ? (
          <div className="flex flex-row">
            <Image width={50} height={50} alt="manga-image" src={manga.image} />
            <h1>KANAN</h1>
          </div>
        ) : (
          <div className="rounded-md shadow-inner">
            {resultManga.map((manga) => {
              return (
                // Manga Search Result Card
                <MangaSearchCard
                  onSearchClick={onSearchClick}
                  key={manga.id}
                  {...manga}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddManga;
