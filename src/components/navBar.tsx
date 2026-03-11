import NavBtn from "./ui/navBtn"

const platform:string[] = ["Zero-Trust-Engine", "Edge Compute", "Threat Intelligence", "API Gateway"]
const solution:string[] = ["Financial Services", "Healthcare", "Government", "Enterprise"]
const resource:string[] = ["Documentation", "Case Studies", "Blog", "Support"]
const company:string[] = ["About", "Careers", "Contact", "Press"]

export default function NavBar(){
    return(
        <nav className="z-10 mt-5 m-2 p-2">
            <NavBtn btnText="PLATFORM"  menuLabels={platform}/>
            <NavBtn btnText="SOLUTIONS"  menuLabels={solution}/>
            <NavBtn btnText="RESOURCES"  menuLabels={resource}/>
            <NavBtn btnText="COMPANY" menuLabels={company}/>

        </nav>
    )
}