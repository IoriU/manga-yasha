"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";

interface MyButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon: React.ReactNode;
  color: string;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  return (
    <div
      className={`flex flex-row rounded-md p-2 text-white items-center text-sm
          justify-center space-x-2 cursor-pointer transition-all duration-200
         active:text-gray-100 active:shadow-inner active:scale-95
           ${props.color}
           `}
    >
      {props.icon}
      <button>{props.title}</button>
    </div>
  );
};

export default MyButton;
