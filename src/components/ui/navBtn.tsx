import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
type PROPS = {
  btnText: string;
  menuLabels: string[];
};
export default function NavBtn({ btnText, menuLabels }: PROPS) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <motion.button
      className="relative font-light text-gray-400 text-sm m-2 p-2 cursor-pointer font-roboto font-mono"
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
    >
      <h1 className="flex flex-row">{btnText} <ChevronDownIcon className="mx-1 w-4 h-4"/></h1> 

      {openMenu && (
        <div
          className="absolute flex flex-col items-start justify-baseline w-45 h-fit bg-gray-900 top-8 rounded-md z-10"
          onMouseLeave={() => setOpenMenu(false)}
        >
          {menuLabels.map((label) => (
            <button className="text-xs w-fit p-2 cursor-pointer hover:bg-gray-800 rounded-md font-roboto font-mono">
              {label}
            </button>
          ))}
        </div>
      )}
    </motion.button>
  );
}
