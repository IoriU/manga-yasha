import { FaPlus, FaSearch, FaEdit, FaTrash, FaAngleDown } from "react-icons/fa";
import MyButton from "../components/button.comp";
import MyInputField from "../components/input.comp";
import Image from "next/image";
import MangaFilterComp from "./components/manga.filter.comp";
import MangaGridComp from "./components/manga.grid.comp";

export default function Manga() {
  return (
    <div className="flex flex-col h-full rounded-lg shadow-lg -mt-4 m-4">
      <div className="flex flex-col p-4 ">
        {/* Title */}
        <h1 className="text-other text-2xl font-bold">Manga Database</h1>

        {/* Upper Section */}
        <div className="flex flex-row space-x-2 my-2">
          {/* Search Manga */}
          <MyInputField />
          <div className="flex items-center justify-center ">
            <FaSearch className="fill-other" size={24} />
          </div>

          {/* Add Manga */}
          <div className="flex w-full justify-end">
            <MyButton
              color="bg-blue-500 hover:bg-blue-600 active:bg-blue-500"
              title="Add Manga"
              icon={<FaPlus size={14} />}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <span className="flex mx-4 border-b bg-gra" />

      {/* Filter Manga List */}
      <MangaFilterComp />

      {/* Manga List */}
      <MangaGridComp />
    </div>
  );
}
