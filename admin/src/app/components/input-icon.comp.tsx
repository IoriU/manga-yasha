"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface MyInputFieldIconProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch: (event: React.FormEvent, searchData: string) => void;
}

const MyInputFieldIcon: React.FC<MyInputFieldIconProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  //   const onSearch = (event: React.FormEvent) => {
  //     event.preventDefault();
  //     const encodedSearchQuery = encodeURIComponent(searchQuery);
  //     router.push('')
  //     console.log(encodedSearchQuery);
  //   };

  //jsonplaceholder.typicode.com/posts

  https: return (
    <div className="flex border relative border-gray-300 rounded-md ">
      <form
        className="w-full"
        onSubmit={(event) => props.onSearch(event, searchQuery)}
      >
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search Manga"
          className="p-2 transition-all duration-300 text-sm w-full overflow-auto rounded-md border-none focus:outline-none 
        focus:ring-2 focus:ring-green-"
          type="text"
        />
      </form>

      <div className="flex absolute items-center right-2 top-2 text-orange-other">
        <FaSearch size={20} />
      </div>
    </div>
  );
};

export default MyInputFieldIcon;
