"use client";

import React, { ReactNode, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBook, FaHome } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export default function Sidebar({ expanded }: { expanded: boolean }) {
  const router = usePathname();
  return (
    <div className=" flex ">
      <nav
        className={`flex flex-col flex-wrap h-full border-r shadow-md transition-all duration-200
        ${expanded ? " w-72 p-8" : "w-16 p-2"}
      `}
      >
        <div className="flex flex-row items-center">
          <Image width={44} height={44} alt="logo" src={"/assets/logo.png"} />
          <h1
            className={`font-bold ml-2 transition-all duration-300 text-other
          ${expanded ? "text-4xl" : "text-[0] "}`}
          >
            Yasha
          </h1>
        </div>
        <div className="flex border-b">
          <ul className="flex-1 my-4">
            <li>
              <Link href={"/"}>
                <SidebarItem
                  icon={
                    <FaHome
                      class={router === "/" ? "fill-white" : "fill-primary"}
                      size={24}
                    />
                  }
                  text={expanded ? "Home" : ""}
                  active={router === "/"}
                  expanded={expanded}
                />
              </Link>
            </li>
            <li>
              <Link href={"/manga"}>
                <SidebarItem
                  icon={
                    <FaBook
                      class={
                        router === "/manga" ? "fill-white" : "fill-primary"
                      }
                      size={24}
                    />
                  }
                  text={expanded ? "Manga" : ""}
                  active={router === "/manga"}
                  expanded={expanded}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex border-b">
          <ul className="flex-1 my-4">
            <li>
              <Link href={"/setting"}>
                <SidebarItem
                  icon={
                    <FaGear
                      class={
                        router === "/setting" ? "fill-white" : "fill-primary"
                      }
                      size={24}
                    />
                  }
                  text={expanded ? "Setting" : ""}
                  active={router === "/setting"}
                  expanded={expanded}
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export const SidebarItem = ({
  icon,
  text,
  active,
  expanded,
}: {
  icon: ReactNode;
  text?: string;
  active: boolean;
  expanded: boolean;
}) => {
  return (
    <div
      className={`flex flex-row items-center my-4 p-2 rounded-lg cursor-pointer transition-colors duration-300
    ${active ? "text-white bg-primary" : "text-primary hover:bg-blue-200 "}
    ${!text ? "" : ""}
    `}
    >
      {icon}
      {text ? <span className="ml-2 text-base">{text}</span> : ""}
    </div>
  );
};
