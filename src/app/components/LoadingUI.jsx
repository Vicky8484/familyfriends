import Image from "next/image";

const LoadingUI = ({text1, text2, gif, className}) => {
  return (
    <article className={`col-span-2 min-h-screen ${className}`}>
      <section className=" flex flex-col minmax-h-200 bg-gray-200 shadow-xl justify-center text-center items-center p-6 rounded-xl my-4">
        <h1 className="font-bold text-xl text-gray-700">{text1}</h1>
        <h2 className="mb-4 font-semibold text-2xl text-gray-700">{text2}</h2>

        <Image
          width={200}
          height={200}
          src={gif}
          alt="Cute dog animation"
          className="aspect-square w-64 mb-4 object-cover rounded-xl"
        />

        <div className="flex gap-2.5">
          <div className="dot bg-green-400"></div>
          <div className="dot dot2 bg-blue-500"></div>
          <div className="dot bg-orange-600"></div>
          <div className="dot dot2 bg-purple-700"></div>
          <div className="dot bg-yellow-400"></div>
        </div>
      </section>
    </article>
  );
};

export default LoadingUI;
