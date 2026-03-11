import { useState, useContext, useEffect } from "react";
import { ActiveContext } from "../context/openMenus";
import { motion } from "framer-motion";
type PROPS = {
  btnText: string;
  sections: string[];
};
export default function MobileNavBtn({ btnText, sections }: PROPS) {
  const [miniMenu, setMiniMenu] = useState(false);
  const { active, activeValue, setActiveValue } = useContext(ActiveContext);

  useEffect(() => {
    if (active && miniMenu && activeValue !== btnText) setMiniMenu(false);
    else if (active && !miniMenu && activeValue == btnText) setMiniMenu(true);
  }, [activeValue, active]);

  return (
    <button
      className="relative m-2 p-2 text-sm"
      onClick={() => {
        if (btnText !== activeValue) {
          if (miniMenu) {
            setMiniMenu(!miniMenu);
          }
          setActiveValue(btnText);
          setMiniMenu(!miniMenu);
        }
      }}
    >
      <h1
        className={`text-white font-mono w-full ${btnText == activeValue ? "bg-gray-700 shadow-2xs" : ""} px-2 p-1 rounded-xs text-sm`}
      >
        {btnText}
      </h1>

      {miniMenu && (
        <motion.div className="absolute flex flex-col items-start top-0 right-[110%] bg-gray-900 w-40 h-fit rounded-sm shadow-lg z-50"
        transition={{
            duration: 1
        }}
        >
          {sections.map((item) => (
            <button className="text-white text-xs m-2"> {item}</button>
          ))}
        </motion.div>
      )}
    </button>
  );
}
