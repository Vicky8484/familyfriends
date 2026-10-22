import Link from "next/link";
import Logo from "./components/Logo";
import "./globals.css";
import BreedCards from "./components/BreedCards";
import {LiaSearchSolid} from "react-icons/lia";

export default function ListView() {
  return (
    <>
      <div className="flex gap-4 m-4 items-center">
        <div className="transition-colors duration-400 ease-in-out bg-(--coral-accent) hover:bg-[#E38982] active:bg-[#E38982] rounded-full p-3 h-full text-white">
          <LiaSearchSolid className="size-8" />
        </div>
        <input
          type="text"
          className="p-4 border-gray-300 border-2 rounded-full w-full"
          placeholder="search breeds"
        ></input>
      </div>

      <section className="grid grid-cols-2 p-4 gap-4">
        <BreedCards />
      </section>
    </>
  );
}
