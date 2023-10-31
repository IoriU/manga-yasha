"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import Spinner from "../Spinner";

interface InputFieldChapterProps {
  value?: ChapterManga[];
  onChangeMangaChapter: (value: ChapterManga[]) => void;
  onChangeMangaPages?: (value: PageManga[]) => void;
}

const InputFieldChapter: React.FC<InputFieldChapterProps> = (props) => {
  const [selectedChapter, setSelectedChapter] = React.useState<ChapterManga>();
  const [pages, setPages] = React.useState<PageManga[]>();

  const HandleSelectedChapter = async (chapter: ChapterManga) => {
    setSelectedChapter(chapter);
    setPages([]);
    try {
      await fetch(
        `https://api.consumet.org/manga/mangadex/read/${selectedChapter?.id}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPages([]);
          setPages(data);
        });
    } catch (error) {
      console.log(error);
    }

    console.log(pages);
  };

  return (
    <>
      <span className="text-sm font-semibold">Chapters</span>
      <div className="flex flex-row border relative border-gray-400 rounded-md p-2 h-screen ">
        {/* CHAPTER LIST */}
        <div className="flex flex-col  flex-1 overflow-scroll">
          {/* CHAPTER CARD */}
          {props.value?.map((chapter, chapterIdx) => (
            <>
              {chapter.pages > 0 ? (
                <div
                  onClick={() => HandleSelectedChapter(chapter)}
                  key={chapterIdx}
                  className="flex p-1 text-sm justify-center items-center
          cursor-pointer hover:shadow-inner rounded-md hover:bg-gray-200"
                >
                  <span>{"Chap." + chapter.chapterNumber}</span>
                </div>
              ) : null}
            </>
          ))}

          <div
            className="flex p-1 text-sm justify-center items-center
        cursor-pointer hover:shadow-inner rounded-md hover:bg-gray-200"
          >
            <FaPlus style={{ color: "gray" }} />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mx-1 rounded-md border-r" />
        {/* PAGE LIST */}
        <div className="grid grid-cols-4 flex-[2] h-full overflow-scroll space-x-2 space-y-2">
          {pages && pages!.length! > 0 ? (
            pages!.map((page, pageIdx) => (
              <div key={pageIdx} className="flex flex-col items-center">
                {page.img ? (
                  <Image
                    width={300}
                    height={400}
                    className=""
                    src={page.img}
                    alt="manga-page"
                  />
                ) : (
                  <Spinner />
                )}
                <span className="text-xs mt-1">{pageIdx + 1}</span>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default InputFieldChapter;
