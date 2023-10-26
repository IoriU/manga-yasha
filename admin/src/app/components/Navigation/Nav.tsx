"use client";
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Nav({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);

  const handleExpand = () => {
    setExpanded(!expanded);
    //console.log(expanded);
  };

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar expanded={expanded} />
      <div className="flex w-screen  flex-col">
        <Header onClick={handleExpand} />
        {children}
      </div>
    </div>
  );
}
