import React from "react";
import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { useState } from 'react'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range'

function Header() {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection"

  }

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5
    md:px-10
    "
    >
      <div className="relative flex items-center h-10 cursor-pointer ">
        <Image
          src="https://links.papareact.com/qd3"
          fill={true}
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>
      <div className="md:shadow-sm flex items-center py-2 md:border-2 rounded-full">
        <input
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
          className="pl-5 flex-grow outline-none bg-transparent text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="active:scale-90  transition duration-150 md:mr-2 hidden md:inline-flex h-8 p-2 cursor-pointer rounded-full bg-red-400 text-white" />
      </div>
      <div className="flex space-x-4 justify-end text-gray-500 items-center">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center rounded-full border-2 p-2 space-x-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && <DateRangePicker ranges={[selectionRange]} />}
    </header>
  );
}

export default Header;
