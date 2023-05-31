import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/pokemon");
  const data = await res.json();

  // map data to an array of path objects with params (name)
  const paths = data.map((pokemon) => {
    return {
      params: { name: pokemon.name.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const name = context.params.name;
  const res = await fetch("http://127.0.0.1:8000/pokemon/" + name);
  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

const Details = ({ pokemon }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 border p-4 border-gray-300 m-2 hover:shadow-md bg-white rounded-md">
      <h1 className="text-4xl mb-2 text-center capitalize">{pokemon.name}</h1>
      <div className="flex justify-center items-center mb-4">
        <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32" />
      </div>
      <p className="text-center font-bold mb-1">ID: {pokemon.id}</p>
      <p className="text-center">Type 1: {pokemon.type1}</p>
      <p className="text-center">Type 2: {pokemon.type2}</p>
      <p className="text-center">Weight: {pokemon.weight_kg} kg</p>
      <p className="text-center">Attack: {pokemon.attack}</p>
      <p className="text-center">Defense: {pokemon.defense}</p>
    </div>
  );
};

export default Details;
