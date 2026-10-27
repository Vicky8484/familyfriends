import "./globals.css";
import BreedCards from "./components/BreedCards";
import {LiaSearchSolid} from "react-icons/lia";

export default async function ListView({searchParams}) {
  const {query = ""} = await searchParams;
  return (
    <>
      <form action="/" className="flex gap-4 m-4 items-center">
        <button
          type="submit"
          className="transition-colors duration-400 ease-in-out bg-(--coral-accent) hover:bg-[#E38982] active:bg-[#E38982] rounded-full p-3 h-full text-white"
        >
          <LiaSearchSolid className="size-8" />
        </button>
        <input
          type="search"
          name="query"
          placeholder="Search breeds ..."
          className="p-4 border-gray-300 focus:border-gray-500 border-2 rounded-full w-full"
        ></input>
      </form>

      <section className="grid grid-cols-2 p-4 gap-4 flex-1 content-start">
        <BreedCards searchParams={searchParams} />
      </section>
    </>
  );
}
