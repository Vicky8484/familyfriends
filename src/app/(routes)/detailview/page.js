import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Image from "next/image";
import Description from "../../components/Description";
import StarBtn from "../../components/StarBtn";
import MiniCard from "@/app/components/MiniTitleCard";
import {Suspense} from "react";
import LoadingUI from "@/app/components/LoadingUI.jsx";

const DetailView = () => {
  return (
    <Suspense fallback={<LoadingUI gif="/cutie-gif.gif" className="m-4" />}>
      <FetchBreed />
    </Suspense>
  );
};

export default DetailView;

const FetchBreed = async ({className = ""}) => {
  const response = await fetch("https://api.thedogapi.com/v1/breeds?limit=2", {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const BreedData = await response.json();

  return BreedData.map((breed, index) => (
    //key index kan også godt være product.id, der skal bare være et key prop med en værdi der bliver unik for hver element der bliver returnet
    <div key={index} className="grid p-4">
      <div className="relative grid w-fit">
        <Image
          src={breed.image.url}
          alt="Creepy doog"
          width={500}
          height={500}
          className="col-start-1 row-start-1 rounded-3xl aspect-square object-cover"
        />
        <Link
          href="/"
          className=" bg-[#f2968fad] transition-colors duration-400 ease-in-out 
            hover:bg-(--coral-accent) rounded-full m-4 p-2 
           text-gray-100 col-start-1 row-start-1 justify-self-start self-start h-fit"
        >
          <MdKeyboardArrowLeft className="size-8" />
        </Link>
        <StarBtn />
        <MiniCard />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 leading-1.5 py-6">
        {breed.name}
      </h1>
      <Description
        desc1="Confident"
        desc2="Alert"
        desc3="Playful"
        desc4="Loyal"
      />
      <br></br>
      <h3 className="text-gray-700 font-bold">Breed description</h3>
      <p className="text-gray-700">{breed.description}</p>
      <br></br>
      <h3 className="text-gray-700 font-bold">Breed history</h3>
      <p className="text-gray-700">{breed.history}</p>
    </div>
  ));
};
