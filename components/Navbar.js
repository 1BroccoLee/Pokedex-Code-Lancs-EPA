import Image from "next/image";
import React from "react";
import Link from "next/link";
// import { useRecoilState } from "recoil";
// import { searchState } from "@/atoms/SearchAtom";
const Navbar = () => {
  // const [isPopupOpen, setIsPopupOpen] = useRecoilState(searchState);

  const togglePopup = () => {
    document.body.styleoverflowY = "hidden";
    setIsPopupOpen(true);
    console.log("toggling_Popup");
  };

  return (
    <div className="bg-red-500 py-4 px-4 sticky top-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h2 className="text-white text-4xl">Pokedex</h2>
            <div className="logo">
              <Image
                src="/pokeball.png"
                alt="site logo pokeball"
                width={60}
                height={60}
              />
            </div>
          </Link>

          <Link href="/about" className="flex justify-between items-left">
            About
          </Link>

          <div
            className="bg-white py-2 px-4 rounded-xl text-gray-500 md:w-[300px] cursor-pointer"
            onClick={togglePopup}
          >
            Search for Any Pokemon!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
