import NavBar from "./components/navBar";
import MobileNav from "./components/mobileNav";
import Hero from "./components/hero";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import useWindowSize from "./hooks/useWindowSize";

function App() {

  
  const [sreenRotation, setScreenRotation] = useState(false)

  const { Width, Height } = useWindowSize()

useEffect(()=>{
  if(Width > Height) {setScreenRotation(true)}
    else setScreenRotation(false)

    console.log(`Screen is rotated: ${sreenRotation}`)

}, [Width, Height])
  
  return (
    // <main className={`relative w-screen ${!sreenRotation ? "h-screen overflow-hidden" : "h-fit overflow-x-hidden overflow-y-auto"} `}>
     <main className="relative flex flex-col p-0 m-0 w-screen min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-20">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover -z-20"
      >
        <source src={`${import.meta.env.BASE_URL}videos/199285-909903160_medium.mp4" type="video/mp4`} />
      </video>
      </div>
      { Width > 768 ? (<NavBar />) : (<MobileNav />)}
      <div className="flex-1">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}

export default App;
