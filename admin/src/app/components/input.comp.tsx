import React from "react";

interface MyInputFieldProps extends React.HTMLAttributes<HTMLDivElement> {}

const MyInputField: React.FC<MyInputFieldProps> = () => {
  return (
    <div className="flex border border-gray-300 rounded-md">
      <input
        placeholder="Search Manga"
        className="p-2 transition-all duration-300 text-sm lg:w-96  rounded-md border-none focus:outline-none 
        focus:ring-2 focus:ring-green-"
        type="text"
      />
    </div>
  );
};

export default MyInputField;
