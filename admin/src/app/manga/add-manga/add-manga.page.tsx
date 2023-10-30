"use client";
import MyButton from "@/app/components/button.comp";
import MyInputFieldIcon from "@/app/components/input-icon.comp";
import { FaPlus } from "react-icons/fa";
import React from "react";
import Spinner from "./Spinner";
import MangaSearchCard from "./components/manga-search-card.comp";
import Image from "next/image";
import InputFieldCustom from "./components/input-custom.comp";
import InputFieldMultiple from "./components/input-multiple.comp";

const AddManga = () => {
  const [resultManga, setResultManga] = React.useState<SearchManga[]>([]);

  const [isLoading, setIsLoading] = React.useState(false);

  //handle add manga input state
  const [manga, setManga] = React.useState<Manga>();

  const [mangaChapter, setMangaChapter] = React.useState("");

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
  };

  const handleAddManga = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(manga);
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
          // || ADD MANGA SECTION || \\

          <div className="flex flex-col">
            <form onSubmit={handleAddManga} action="">
              {/* UPPER SECTION */}
              <div className="flex flex-row">
                <Image
                  className=" h-64 rounded-md shadow-md m-2"
                  width={200}
                  height={200}
                  alt="manga-image"
                  src={manga.image}
                />
                <div className="flex flex-1 flex-col w-full space-y-2">
                  <InputFieldCustom
                    title="ID"
                    placeholder="Manga ID"
                    value={manga.id}
                    onChange={(value) => setManga({ ...manga, id: value })}
                  />
                  <InputFieldCustom
                    title="Title"
                    placeholder="Manga Title"
                    value={manga.title}
                    onChange={(value) => setManga({ ...manga, title: value })}
                  />

                  <InputFieldCustom
                    title="Release Date"
                    placeholder="Manga Release Date"
                    value={manga.releaseDate}
                    onChange={(value) =>
                      setManga({ ...manga, releaseDate: value })
                    }
                  />
                  <InputFieldCustom
                    title="Status"
                    placeholder="Status"
                    value={manga.status}
                    onChange={(value) => setManga({ ...manga, status: value })}
                    type="select"
                    options={[{ value: "Ongoing" }, { value: "Completed" }]}
                  />
                </div>
              </div>

              {/* LOWER SECTION */}
              <div className="flex flex-col w-ful space-y-2">
                <InputFieldCustom
                  title="Description"
                  placeholder="Manga Description"
                  value={manga.description}
                  onChange={(value) =>
                    setManga({ ...manga, description: value })
                  }
                  type="textarea"
                />
                <InputFieldMultiple
                  placeholder="Add Genre By Pressing Enter"
                  value={manga.genres}
                  onChange={(value) => {
                    setManga({ ...manga, genres: value });
                    console.log(manga.genres);
                  }}
                />
                <button className="bg-fuchsia-600 text-sm p-2 text-white rounded-md">
                  Submit Manga
                </button>
              </div>
            </form>
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
