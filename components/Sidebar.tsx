import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

const Sidebar = () => {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-indigo-500/50">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 w-16 text-indigo-600 font-semibold" />
        <h1 className="hidden md:inline text-3xl mt-2 text-center">
          Web Scraper
        </h1>
        <h2 className="hidden md:inline text-cs italic text-center">
          Scrapping the Unscrapable
        </h2>
      </div>
      <ul>
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
        {/* SidebarRow */}
      </ul>
    </div>
  );
};

export default Sidebar;
