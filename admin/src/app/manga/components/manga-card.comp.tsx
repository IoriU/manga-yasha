import MyButton from "@/app/components/button.comp";
import Image from "next/image";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface MangaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  image: string;
  latestChapter: string;
}

const MangaCard: React.FC<MangaCardProps> = (props) => {
  return (
    <div
      className="flex flex-col pb-4 rounded-md shadow-lg justify-center items-start 
            w-48 m-4 space-y-1"
    >
      <Image
        className="rounded-t-md h-full"
        layout="fit"
        height={300}
        width={200}
        alt={"Poster"}
        src={props.image}
      />
      <h1 className="text-other text-lg ali font-bold px-2">{props.title}</h1>

      <p className="text-other px-2 text-sm">{`Latest Chapter: ${props.latestChapter}`}</p>
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
  );
};

export default MangaCard;
