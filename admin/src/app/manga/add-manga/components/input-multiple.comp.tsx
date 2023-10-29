"use client";
import React, { use, useEffect } from "react";
import { FaX } from "react-icons/fa6";

interface InputFieldMultipleProps {
  value?: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

const InputFieldMultiple: React.FC<InputFieldMultipleProps> = (props) => {
  const [value, setValue] = React.useState<string[]>(props.value || []);

  const baseStyle =
    "w-full p-2 px-4 transition-all duration-300 text-sm overflow-auto rounded-md border-none text-black focus:outline-none  ";

  function GenreCard({ valua }: { valua?: string }) {
    return (
      <div className="flex flex-row items-center px-2 justify-evenly w-full h-6 rounded-md shadow-md">
        <a className="text-xs font-semibold">{valua}</a>
        <br />
        <div
          onClick={() => {
            setValue!((prev) => {
              return prev.filter((genre) => genre !== valua);
            });
            //console.log(value);
          }}
          className="hover:shadow-inner p-1 cursor-pointer rounded-md"
        >
          <FaX size={10} />
        </div>
      </div>
    );
  }

  useEffect(() => {});

  return (
    <>
      <span className="text-sm font-semibold">Genre</span>
      <div className="border relative border-gray-400 rounded-md">
        <input
          placeholder={props.placeholder}
          className={baseStyle + "bg-transparent"}
          type="text"
        />
        {/* Divider */}
        <span className="flex mx-4 border-b" />

        {/* Genre List */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12
mx-4 my-2 gap-2"
        >
          {/* Genre card    */}
          {value?.map((genre, genreIdx) => {
            return <GenreCard key={genreIdx} valua={genre} />;
          })}
        </div>
      </div>
    </>
  );
};
export default InputFieldMultiple;
