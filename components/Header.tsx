"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { FormEvent, useRef } from "react";

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = inputRef.current?.value;
    // Not the input Simply Return
    if (!input) return;

    // After String Data input Field Clear
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }

    try {
      // Call our Api to Create the Scraper...
    } catch (error) {
      // Handle any Errors
    }

    // Wait for the response to come back
  };

  return (
    <header>
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-2 justify-center rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300"
        />
        <button hidden type="submit">
          Search
        </button>
        <MagnifyingGlassIcon className="w-6 h-6 text-indigo-300" />
      </form>
    </header>
  );
};

export default Header;
