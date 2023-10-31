import MyButton from "@/app/components/button.comp";
import Image from "next/image";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import MangaCard from "./manga-card.comp";

const MangaGridComp = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  ">
      {MangaList.map((manga) => (
        <MangaCard
          key={manga.title!}
          title={manga.title!}
          image={manga.image!}
        />
      ))}
    </div>
  );
};

const MangaList: Manga[] = [
  {
    title: "One Piece",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/04/65/2b/04652b44ea7c1275d1022d98d59ecc97.jpg",

    id: "1",
    releaseDate: "2021-02-02",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    chapters: [],
  },
  {
    title: "Naruto",
    description: "Luffy and his crew",
    image: "https://static.wikia.nocookie.net/naruto/images/6/63/Artbook_2.png",

    id: "1",
    releaseDate: "2021-02-02",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    chapters: [],
  },
  {
    title: "Demon Slayer",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/9f/a5/a8/9fa5a8848a411d90217ff07b865cc1a3.jpg",

    id: "1",
    releaseDate: "2021-02-02",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    chapters: [],
  },
  {
    title: "One Punch Man",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/f4/94/f3/f494f3934e4dfe56c043d987f8c9f9ff.jpg",

    id: "1",
    releaseDate: "2021-02-02",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    chapters: [],
  },
  {
    title: "Welcome to Demon School! Iruma-kun",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/736x/16/b9/8b/16b98be295259483e96aaaf8187cc3f6.jpg",

    id: "1",
    releaseDate: "2021-02-02",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    chapters: [],
  },
  {
    title: "One Piece",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/04/65/2b/04652b44ea7c1275d1022d98d59ecc97.jpg",

    id: "1",
    releaseDate: "2021-02-02",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    chapters: [],
  },
  {
    title: "One Piece",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/04/65/2b/04652b44ea7c1275d1022d98d59ecc97.jpg",

    id: "1",
    releaseDate: "2021-02-02",
    status: "Ongoing",
    genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    chapters: [],
  },
];

export default MangaGridComp;
