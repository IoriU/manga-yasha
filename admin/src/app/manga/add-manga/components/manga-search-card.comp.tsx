"use client";

import Image from "next/image";
import React, { use, useEffect } from "react";
import Spinner from "../Spinner";

interface SearchMangaProps {
  id: string;
  title: string;
  onSearchClick: (selectedManga: Manga) => void;
}

const MangaSearchCard: React.FC<SearchMangaProps> = (props) => {
  const [manga, setManga] = React.useState<Manga>();

  useEffect(() => {
    getMangaFromConsumeApi();
  }, []);

  const getMangaFromConsumeApi = async () => {
    await fetch(`https://api.consumet.org/manga/mangadex/info/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        const tempManga: Manga = {
          id: data.id,
          title: data.title,
          description: data.description?.en,
          image: data.image,

          releaseDate: data.releaseDate,
          status: data.status,
          genres: data.genres,
          chapters: data.chapters,
        };
        setManga(tempManga);
      });
  };

  return (
    <div
      onClick={() => props.onSearchClick(manga!)}
      className="flex flex-row rounded-md mb-2 w-full hover:shadow-inner p-2 
    cursor-pointer text-other space-x-2"
    >
      {manga?.image ? (
        <Image
          className="w-auto h-auto rounded-md"
          width={70}
          height={50}
          alt="manga-image"
          src={manga?.image!}
        />
      ) : (
        <Spinner />
      )}
      <div className="flex flex-col">
        <h1 className="font-semibold">{`${props.title} [${
          manga?.releaseDate ? manga?.releaseDate : "XXXX"
        }]`}</h1>

        {/* Manga Genre List */}
        <div className="flex flex-row max-h-10 w-full">
          {manga?.genres.map((genre, genreIdx) => (
            <h2 key={genreIdx} className="text-xs font-semibold my-2 mr-2">
              {genre.toUpperCase()}
            </h2>
          ))}
        </div>
        <h2 className="text-sm">{`Chapter: ${manga?.chapters.length}`}</h2>
      </div>
    </div>
  );
};

export default MangaSearchCard;
