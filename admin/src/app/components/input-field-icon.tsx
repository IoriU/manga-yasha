"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface InputFieldIconProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch: (event: React.FormEvent, searchData: string) => void;
}

const InputFieldIcon: React.FC<InputFieldIconProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState("");

  https: return (
    <div className="flex border relative border-gray-300 rounded-md focus-within:text-blue-400">
      <form
        className="w-full"
        onSubmit={(event) => props.onSearch(event, searchQuery)}
      >
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search Manga"
          className="p-2 transition-all duration-300 text-sm w-full overflow-auto rounded-md border-none
          focus:text-black focus:outline-none focus:ring-2 focus:ring-green-"
          type="text"
        />
      </form>

      <div
        className="flex absolute items-center right-4 top-2 text-orange-other
      focus:text-red-200"
      >
        <FaSearch size={20} />
      </div>
    </div>
  );
};

export default InputFieldIcon;
