import MiniFooter from "./ui/minFooter"
import MiniRight from "./ui/minRight"

export default function Footer(){
    return(
    <footer className="flex flex-col md:flex-row items-start justify-between w-full h-fit">
        <section className="flex flex-row items-center">
           <MiniFooter topLabel="99.99%" bottomLabel="UPTIME" />
           <MiniFooter topLabel="<2ms" bottomLabel="LATENCY" /> 
           <MiniFooter topLabel="14B+" bottomLabel="EVENTS/DAY" /> 
           <MiniFooter topLabel="2.4K+" bottomLabel="CLIENT" />  
        </section>

        <section className="flex flex-row items-center">
<MiniRight iconUrl= {`${import.meta.env.BASE_URL}images/shield-svgrepo-com (2).svg`} labelText="ZERO-TRUST" />
<MiniRight iconUrl={`${import.meta.env.BASE_URL}images/2cpu-processor-hardware-chip-microchip-svgrepo-com.svg`} labelText="EDGE-NATIVE" />
<MiniRight iconUrl={`${import.meta.env.BASE_URL}images/lock-svgrepo-com.svg`} labelText="SOC 2 TYPE II" />     
        </section>
    </footer>
    )
}