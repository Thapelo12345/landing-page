import { useState } from "react";
import { ActiveContext } from "./context/openMenus";
import MobileNavBtn from "./ui/mobileNavBtn";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileNav() {
  const [opeMobileMenu, setOpenMobileMenu] = useState(false);
  const [active, setLastMenu] = useState(false);
  const [activeValue, setCrrActive] = useState("PLATFORM");

  const setActive = (inputValue: boolean) => {
    setLastMenu(inputValue);
  };
  const setActiveValue = (inputValue: string) => {
    setCrrActive(inputValue);
  };

  return (
    <div className="fixed top-5 right-2 w-10 h-10">
      <button
        className="text-white font-bold w-full h-full"
        onClick={() => {

            // resetting to defauls
            if(active && activeValue !== "PLATFORM") {
            setActive(false)
            setCrrActive("PLATFORM")
            }
            else{setActive(true)}

          setOpenMobileMenu(!opeMobileMenu);
        }}
      >
        {!opeMobileMenu ? (<Bars3Icon className="w-5 h-5"/>) : (<XMarkIcon className="w-5 h-5"/>)}
      </button>
      {opeMobileMenu && (
        <menu className="absolute flex flex-col items-start top-11 h-fit right-2 bg-gray-800 w-35 rounded-lg z-50">
          <ActiveContext.Provider
            value={{ active, activeValue, setActive, setActiveValue }}
          >
            <MobileNavBtn
            key={1}
              btnText="PLATFORM"
              sections={[
                "Zero-Trust-Engine",
                "Edge Compute",
                "Threat Intelligence",
                "API Gateway",
              ]}
            />
            <MobileNavBtn
            key={2}
              btnText="SOLUTIONS"
              sections={[
                "Financial Services",
                "Healthcare",
                "Government",
                "Enterprise",
              ]}
            />
            <MobileNavBtn
            key={3}
              btnText="RESOURCES"
              sections={["Documentation", "Case Studies", "Blog", "Support"]}
            />
            <MobileNavBtn
            key={4}
              btnText="COMPANY"
              sections={["About", "Careers", "Contact", "Press"]}
            />
          </ActiveContext.Provider>
        </menu>
      )}
    </div>
  );
}
