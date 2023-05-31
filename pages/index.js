// import { useState } from "react";
// import Link from "next/link";
// import Layout from "@/components/Layout";
// import Image from "next/image";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Pokedex | Home</title>
//         <meta name="keywords" content="pokemon" />
//       </Head>
//       <div>
//         <h1 className={styles.title}>Homepage</h1>
//         {/* <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
//         <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p> */}
//         <Link href="/pokemon/" className={styles.btn}>
//           See Pokemon List
//         </Link>
//       </div>
//     </>
//   );
// }
import Link from "next/link";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("http://127.0.0.1:8000/pokemon");
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const Pokemon = ({ pokemon }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 40; // Number of items to display per page

  // Calculate the index range of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPokemon = pokemon.slice(indexOfFirstItem, indexOfLastItem);

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div class="flex flex-wrap">
      {currentPokemon.map((pokemon) => (
        <Link
          href={"/pokemon/" + pokemon.name}
          key={pokemon.name}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 border p-4 border-grey m-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md"
        >
          <h3>{pokemon.name}</h3>
        </Link>
      ))}
      <span class="flex flex-wrap w-auto overflow-hidden">
        {/* Previous button */}
        <button
          className="border p-1 border-grey my-1 hover:shadow-md capitalize flex items-center text-sm bg-gray-200 text-gray-600 rounded-md px-1 py-1 mx-2"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {/* Numbered buttons */}
        {Array.from(
          { length: Math.ceil(pokemon.length / itemsPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-600"
              } rounded-md px-2 py-0 mx-1`}
            >
              {i + 1}
            </button>
          )
        )}
        {/* Next button */}
        <button
          className="border p-1 border-grey my-1 hover:shadow-md capitalize flex items-center text-sm bg-gray-200 text-gray-600 rounded-md px-1 py-1 mx-2"
          disabled={currentPage === Math.ceil(pokemon.length / itemsPerPage)}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </span>
    </div>
  );
};

export default Pokemon;
