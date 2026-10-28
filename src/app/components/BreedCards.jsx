"use server";

import Image from "next/image";
import Link from "next/link";
import StarBtn from "./StarBtn";
import LoadingUI from "@/app/components/LoadingUI.jsx";
import {Suspense} from "react";
import NoResultUI from "@/app/components/NoResultUI.jsx";

const BreedCards = async ({searchParams}) => {
  return (
    <Suspense
      fallback={
        <LoadingUI
          gif="/cutie-gif.gif"
          text1="Hold up!"
          text2="cute dogs incoming"
        />
      }
    >
      {" "}
      <FetchBreeds searchParams={searchParams} />
    </Suspense>
  );
};

export default BreedCards;

/*
-
-
-
-
-
-
data fetching*/

const FetchBreeds = async ({className = "", searchParams}) => {
  const {query = ""} = await searchParams;
  const url = query
    ? `https://api.thedogapi.com/v1/breeds/search?q=${query}`
    : "https://api.thedogapi.com/v1/breeds";

  const headers = {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  };

  const [breedsResponse, favoritesResponse] = await Promise.all([
    await fetch(url, headers),
    await fetch("https://api.thedogapi.com/v1/favourites", headers),
  ]);

  const [breeds, favorites] = await Promise.all([
    await breedsResponse.json(),
    await favoritesResponse.json(),
  ]);

  if (breeds.length === 0) {
    return <NoResultUI />;
  }

  const favoriteIdByImageId = new Map(
    favorites.map((favorite) => [favorite.image_id, favorite.id]),
  );

  return breeds.map((breed, index) => {
    const favoriteId = favoriteIdByImageId.get(breed.image.id) ?? null;
    return (
      <article key={index} className={`relative ${className} breed-card`}>
        <Link href={`/detailview/${breed.id}`} className="grid">
          <Image
            loading="eager"
            src={breed.image.url}
            width={500}
            height={500}
            alt={breed.name}
            title={breed.name}
            className="col-start-1 row-start-1 rounded-3xl aspect-4/3 object-cover"
          />

          <div className="p-4 gap-4">
            <h2 className="font-semibold text-xl leading-7">{breed.name}</h2>
            <p className="text-sx">{breed.origin}</p>
          </div>
        </Link>

        <StarBtn
          id={breed.image.id}
          imageId={breed.image.id}
          initialFavoriteId={favoriteId}
        />
      </article>
    );
  });
};
