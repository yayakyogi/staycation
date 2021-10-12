import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function Headers() {
  const [IsOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const getNavLinkClass = (path) => {
    return router.pathname === path ? " text-blue" : "text-gray900";
  };

  return (
    <div className="shadow bg-white">
      <div className="w-full px-2 md:container md:mx-auto md:px-16 flex flex-row py-3 justify-between items-center">
        <Link href="/">
          <a className="text-2xl md:text-3xl text-blue font-medium">
            Stay
            <span className="text-2xl md:text-3xl text-gray900">cation.</span>
          </a>
        </Link>
        <div
          className={`${
            IsOpen ? "block" : "hidden"
          } flex flex-col absolute top-16 pb-4 pt-2 bg-white shadow-sm w-full left-0 md:shadow-none md:bg-transparent md:top-0 md:relative md:flex md:flex-row md:justify-between md:items-center md:w-80 md:p-0`}
        >
          <Link href="/">
            <a
              className={`font-normal text-sm md:text-base px-2 py-2 hover:text-gray600 md:p-0 header-link${getNavLinkClass(
                "/"
              )}`}
            >
              Home
            </a>
          </Link>
          <Link href="/browseby">
            <a
              className={`font-normal text-sm md:text-base px-2 py-2 hover:text-gray600 header-link${getNavLinkClass(
                "/browseby"
              )}`}
            >
              Browse By
            </a>
          </Link>
          <Link href="stories">
            <a
              className={`font-normal text-sm md:text-base px-2 py-2 hover:text-gray600 header-link${getNavLinkClass(
                "/stories"
              )}`}
            >
              Stories
            </a>
          </Link>
          <Link href="agents">
            <a
              className={`font-normal text-sm md:text-base px-2 py-2 hover:text-gray600 header-link${getNavLinkClass(
                "/agents"
              )}`}
            >
              Agents
            </a>
          </Link>
        </div>
        <button
          id="humbergerbtn"
          onClick={() => setIsOpen(!IsOpen)}
          className="md:hidden text-sm mr-4 px-2 py-1 font-bold border-gray-100 border-1 rounded-md cursor-pointer  focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${!IsOpen ? "block" : "hidden"} h-6 w-6 text-gray900`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${IsOpen ? "block" : "hidden"} h-6 w-6 text-gray900`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
