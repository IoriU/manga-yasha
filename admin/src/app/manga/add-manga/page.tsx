"use client";
import MyButton from "@/app/components/button.comp";
import MyInputFieldIcon from "@/app/components/input-icon.comp";
import { FaPlus } from "react-icons/fa";
import React from "react";
import Spinner from "./Spinner";

const AddManga = () => {
  const [resultManga, setResultManga] = React.useState<SearchManga[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSearch = async (event: React.FormEvent, searchData: string) => {
    event.preventDefault();
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
              title: manga.title,
            })),
          ];
        });
      });
    setIsLoading(false);
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
        ) : (
          <div className="rounded-md shadow-inner">
            {resultManga.map((manga, mangaIdx) => {
              console.log(resultManga.length);
              return (
                // Manga Search Result Card
                <div
                  className="hover:bg-blue-100 p-2 cursor-pointer text-other"
                  key={mangaIdx}
                >
                  <h1>{manga.title}</h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddManga;
