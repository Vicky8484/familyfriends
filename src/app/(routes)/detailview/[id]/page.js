import Link from "next/link";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Image from "next/image";
import Description from "../../../components/Description";
import StarBtn from "../../../components/StarBtn";
import MiniCard from "@/app/components/MiniTitleCard";
import {Suspense} from "react";
import LoadingUI from "@/app/components/LoadingUI.jsx";

const DetailView = ({params}) => {
  return (
    <Suspense fallback={<LoadingUI gif="/cutie-gif.gif" className="m-4" />}>
      <FetchDetailBreed params={params} />
    </Suspense>
  );
};

export default DetailView;

async function FetchDetailBreed({params}) {
  const {id} = await params;
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });

  const data = await response.json();
  const temperament =
    data.temperament
      ?.split(",")
      .map((trait) => trait.trim())
      .filter(Boolean) ?? [];

  return (
    <div key={id} className="grid p-4">
      <div className="relative grid w-fit">
        <Image
          src={data.image.url}
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
        <MiniCard name={data.name} image={data.image.url} />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 leading-1.5 py-6">
        {data.name}
      </h1>
      <Description items={temperament} />
      <br></br>
      <h3 className="text-gray-700 font-bold">Breed description</h3>
      <p className="text-gray-700">{data.description}</p>
      <br></br>
      <h3 className="text-gray-700 font-bold">Breed history</h3>
      <p className="text-gray-700">{data.history}</p>

      <details className="cursor-pointer mt-4 text-gray-700">
        <summary className="p-4 bg-gray-200 rounded-t-xl">More details</summary>
        <div className="bg-gray-100 p-4 rounded-b-xl">
          <ul className="flex flex-col gap-4">
            <li className="border-b pb-4 border-gray-300">
              <b>Life span: </b>
              {data.life_span} years
            </li>
            <li className="border-b pb-4 border-gray-300">
              <b>Weight:</b> {data.weight?.metric ?? "Ikke oplyst"} kg
            </li>
            <li className=" pb-4">
              <b>Height</b> {data.height?.metric ?? "Ikke oplyst"} cm
            </li>
          </ul>
        </div>
      </details>
    </div>
  );
}

/*
params er de værdier, Next.js udleder fra dynamiske dele af URL’en. 
Fordi mappen hedder [id], bliver et besøg på fx /detailview/12 til params.id === "12".

I din detaljeside modtager DetailView params og sender dem videre til FetchDetailBreed. 
Der læser du ID’et med const {id} = await params og bruger det i API-adressen for at hente den valgte hunderace. 
await bruges, fordi nyere Next.js-versioner leverer params asynkront.
*/
