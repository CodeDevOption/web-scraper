import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />
      <h1 className="text-3xl mt-3 text-black/50 font-bold">
        Welcome to the Amazon we Scraper
      </h1>
    </div>
  );
}
