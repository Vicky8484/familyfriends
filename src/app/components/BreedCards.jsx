import Image from "next/image";
import Link from "next/link";
import StarBtn from "./StarBtn";
import {Suspense} from "react";
import LoadingUI from "@/app/components/LoadingUI.jsx";

const BreedCards = () => {
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
      <FetchBreeds />
    </Suspense>
  );
};

export default BreedCards;

const FetchBreeds = async ({className = ""}) => {
  const response = await fetch("https://api.thedogapi.com/v1/breeds?limit=10", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const BreedsData = await response.json();

  return BreedsData.map((breed, index) => (
    //key index kan også godt være product.id, der skal bare være et key prop med en værdi der bliver unik for hver element der bliver returnet

    <article key={index} className={`relative ${className} breed-card`}>
      <Link href="/detailview" className="grid">
        <Image
          src={breed.image.url}
          width={500}
          height={500}
          alt={breed.name}
          title={breed.name}
          className="col-start-1 row-start-1 rounded-3xl aspect-4/3 object-cover"
        />

        <div className="p-4 gap-4">
          <h2 className="font-semibold text-xl leading-10">{breed.name}</h2>
          <p className="text-sx">{breed.origin}</p>
        </div>
      </Link>
      <StarBtn />
    </article>
  ));
};
