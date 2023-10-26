import MyButton from "@/app/components/button.comp";
import Image from "next/image";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const MangaGridComp = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  ">
      {MangaList.map((manga) => (
        <div
          key={manga.title}
          className="flex flex-col pb-4 rounded-md shadow-lg  justify-center items-start 
            w-48 m-4 space-y-1"
        >
          <Image
            className="rounded-t-md"
            height={300}
            width={200}
            alt={"Poster"}
            src={
              "https://i.pinimg.com/originals/04/65/2b/04652b44ea7c1275d1022d98d59ecc97.jpg"
            }
          />
          <h1 className="text-other text-lg ali font-bold px-2">
            {manga.title}
          </h1>

          <p className="text-other px-2 text-sm">Chapter 1002</p>
          <div className="flex flex-row space-x-1 w-full px-2">
            <div className="flex flex-1 justify-center">
              <MyButton
                color="bg-green-500 hover:bg-green-600 active:bg-green-500 w-full"
                title="Edit"
                icon={<FaEdit size={14} />}
              />
            </div>
            <div className="flex flex-1 justify-center">
              <MyButton
                color="bg-red-500 hover:bg-red-600 active:bg-red-500 w-full"
                title="Delete"
                icon={<FaTrash size={14} />}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

type Manga = {
  title: string;
  description: string;
};

const MangaList: Manga[] = [
  {
    title: "One Piece",
    description: "A story about a pirate",
  },
  {
    title: "Naruto",
    description: "A story about a ninja",
  },
  {
    title: "Bleach",
    description: "A story about a shinigami",
  },
  {
    title: "One Piece",
    description: "A story about a pirate",
  },
  {
    title: "Naruto",
    description: "A story about a ninja",
  },
  {
    title: "Bleach",
    description: "A story about a shinigami",
  },
  {
    title: "One Piece",
    description: "A story about a pirate",
  },
  {
    title: "Naruto",
    description: "A story about a ninja",
  },
  {
    title: "Bleach",
    description: "A story about a shinigami",
  },
  {
    title: "One Piece",
    description: "A story about a pirate",
  },
  {
    title: "Naruto",
    description: "A story about a ninja",
  },
  {
    title: "Bleach",
    description: "A story about a shinigami",
  },
  {
    title: "One Piece",
    description: "A story about a pirate",
  },
  {
    title: "Naruto",
    description: "A story about a ninja",
  },
  {
    title: "Bleach",
    description: "A story about a shinigami",
  },
  {
    title: "One Piece",
    description: "A story about a pirate",
  },
  {
    title: "Naruto",
    description: "A story about a ninja",
  },
  {
    title: "Bleach",
    description: "A story about a shinigami",
  },
  {
    title: "One Piece",
    description: "A story about a pirate",
  },
  {
    title: "Naruto",
    description: "A story about a ninja",
  },
  {
    title: "Bleach",
    description: "A story about a shinigami",
  },
];

export default MangaGridComp;
