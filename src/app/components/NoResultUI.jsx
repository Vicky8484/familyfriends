import Link from "next/link";

const NoResultUI = () => {
  return (
    <article className="col-span-2 min-h-screen">
      <section className=" flex flex-col minmax-h-200 text-gray-600 bg-gray-200 shadow-xl justify-center gap-4 text-center items-center p-6 rounded-xl my-4">
        <h1>
          <b>Sorry, your search gave no results!</b>
        </h1>
        <p>Try again or go back to the full breeds list</p>
        <a
          className="bg-(--coral-accent) text-gray-900 focus:bg-gray-600 focus:text-white p-4 rounded-2xl w-50 shadow-xl"
          href="/"
        >
          Go back
        </a>
      </section>
    </article>
  );
};

export default NoResultUI;
