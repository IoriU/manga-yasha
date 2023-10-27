import { FaPlus, FaSearch, FaEdit, FaTrash, FaAngleDown } from "react-icons/fa";
import MyButton from "../components/button.comp";
import MyInputField from "../components/input.comp";
import MangaFilterComp from "./components/manga-filter.comp";
import MangaGridComp from "./components/manga-grid.comp";
import Link from "next/link";

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
          <Link className="flex w-full justify-end" href="/manga/add-manga">
            <MyButton
              color="bg-blue-500 hover:bg-blue-600 active:bg-blue-500"
              title="Add Manga"
              icon={<FaPlus size={14} />}
            />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <span className="flex mx-4 border-b bg-gra" />

      {/* Filter Manga List */}
      <div className="flex flex-row space-x-2 mx-4 my-2">
        <MangaFilterComp items={sortItems} title="Sort" />
        <MangaFilterComp items={orderItems} title="Order" />
      </div>

      {/* Manga List */}
      <MangaGridComp />
    </div>
  );
}

const sortItems = [
  { name: "Title" },
  { name: "Author" },
  { name: "Latest Chapter" },
  { name: "Date Added" },
];

const orderItems = [{ name: "Ascending" }, { name: "Descending" }];
