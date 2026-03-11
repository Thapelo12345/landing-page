import { createContext } from "react";

interface ACTIVE {
    active: boolean;
    activeValue: string;
    setActive: (value: boolean) => void;
    setActiveValue: (value: string) => void;
}

export const ActiveContext = createContext<ACTIVE>({
active: false,
activeValue: "PLATFORM",
setActive: ()=>{},
setActiveValue: ()=>{},
})