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
          key={manga.title}
          title={manga.title}
          image={manga.image}
          latestChapter={manga.latestChapter}
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
    latestChapter: "1002",
  },
  {
    title: "Naruto",
    description: "Luffy and his crew",
    image: "https://static.wikia.nocookie.net/naruto/images/6/63/Artbook_2.png",
    latestChapter: "552",
  },
  {
    title: "Demon Slayer",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/9f/a5/a8/9fa5a8848a411d90217ff07b865cc1a3.jpg",
    latestChapter: "342",
  },
  {
    title: "One Punch Man",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/f4/94/f3/f494f3934e4dfe56c043d987f8c9f9ff.jpg",
    latestChapter: "672",
  },
  {
    title: "Welcome to Demon School! Iruma-kun",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/736x/16/b9/8b/16b98be295259483e96aaaf8187cc3f6.jpg",
    latestChapter: "270",
  },
  {
    title: "One Piece",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/04/65/2b/04652b44ea7c1275d1022d98d59ecc97.jpg",
    latestChapter: "1002",
  },
  {
    title: "One Piece",
    description: "Luffy and his crew",
    image:
      "https://i.pinimg.com/originals/04/65/2b/04652b44ea7c1275d1022d98d59ecc97.jpg",
    latestChapter: "1002",
  },
];

export default MangaGridComp;
