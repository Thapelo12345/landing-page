import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText)
export default function Hero() {


  useGSAP(()=>{
    const split = SplitText.create(".main-text", {type: "chars"})
    const split2 = SplitText.create(".main-paragraph", {type: "chars"})

    gsap.from(split.chars, {
      rotateY: 90,
      autoAlpha: 0,
      stagger: 0.15
    })

    gsap.from(split2.chars, {
      y: 100,
      alpha: 0,
      stagger: 0.05
    })
  })
  return (
    <header className="mt-10 md:mb-10 md:mt-0 flex flex-col items-center justify-center">
      <h1 className="main-text text-white font-mono font-extralight w-80 md:w-200 text-4xl md:text-7xl text-center m-2 p-2 -z-10">
        Infrastructure that defends itself.
      </h1>

      <p className="main-paragraph font-mono w-80 md:w-100 text-center text-md text-gray-400 -z-10">
        Autonomous threat detection and response for enterprises that can't
        afford downtime. One platform. Zero compromises.
      </p>

      <motion.button
        className="text-white cursor-pointer rounded-lg text-sm md:text-lg bg-[rgb(195,40,146)] m-8 px-10 md:px-20 p-2 md:p-4"
        whileHover={{
          boxShadow: "0 0 20px rgb(195,40,146), 0 0 10px white",
          textShadow: "0 0 3px black",
          scale: 1.05,
        }}
      >
        Enter
      </motion.button>
    </header>
  );
}
