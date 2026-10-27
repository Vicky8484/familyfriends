"use client"; /*nødvendigt, fordi knappen bruger klik og react states*/
import {FaRegStar, FaStar} from "react-icons/fa";
import {useState} from "react";
import {addFavorite} from "../actions/actions";

const StarBtn = ({id, breed}) => {
  const [isFavorite, setIsFavorite] =
    useState(
      false,
    ); /*isFavorit fortæller om stjernen er valgt, setIsFavorite er den funktion der skal køre*/

  const handleClick = async () => {
    await addFavorite(id);
    setIsFavorite((favorite) => !favorite);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
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
