import { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  IoSearch,
  IoChevronDownOutline,
  IoChevronUpOutline,
} from "react-icons/io5";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Movies",
    },
    {
      id: 3,
      name: "TV",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "News",
    },
    {
      id: 6,
      name: "Hubs",
    },
  ];

  return (
    <div className="flex justify-between items-center p-4 px-10 absolute w-full bg-gradient-to-b from-[#1e2126] to-transparent z-20">
      <img className="w-[65px]" src={logo} alt="" />
      <ul className="md:flex gap-8 hidden">
        {menu.map((item) => (
          <li key={item.id} className="text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-700 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out">
            {item.name}
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <h2 className="text-[18px] font-medium cursor-poin bg-gray-700 text-white px-3 pb-2 py-1 rounded-md flex items-center gap-1" onClick={()=> (setToggle(!toggle), console.log(toggle))}>
          Home
          {!toggle ? (
            <IoChevronDownOutline className="mt-1" />
          ) : (
            <IoChevronUpOutline className="mt-1" />
          )}
        </h2>

        {toggle ? (
          <ul className="absolute bg-gray-700 w-[200px] text-center mt-2 left-0 right-0 ml-auto mr-auto rounded-md py-2 px-3">
            {menu.map((item) => (
              <li key={item.id} className="text-gray-400 text-[18px] font-medium cursor-pointer hover:bg-gray-500 hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out">
                {item.name}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="flex gap-10">
        <IoSearch className="text-[35px] text-gray-300 hover:bg-gray-700 px-[2px] rounded-md hover:text-white transition-all duration-500 ease-in-out cursor-pointer" />
        <h2 className="px-[10px] text-[20px] text-gray-300 border-[2px] border-white rounded-full">
          R
        </h2>
      </div>
    </div>
  );
};

export default Header;
