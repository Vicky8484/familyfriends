"use client"; /*nødvendigt, fordi knappen bruger klik og react states*/
import {FaRegStar, FaStar} from "react-icons/fa";
import {useState} from "react";

const StarBtn = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  /*isFavorit fortæller om stjernen er valgt, setIsFavorite er den funktion der skal køre*/
  return (
    <button
      type="button"
      onClick={() => setIsFavorite((favorite) => !favorite)}
      aria-label={isFavorite ? "Fjern fra favoritter" : "Føj til favoritter"}
      aria-pressed={isFavorite}
      className="absolute top-4 right-4 z-10 bg-[#f2968fad] rounded-full p-2 text-white"
    >
      {isFavorite ? (
        <FaStar className="size-6" />
      ) : (
        <FaRegStar className="size-6" />
      )}
    </button>
  );
};

export default StarBtn;
