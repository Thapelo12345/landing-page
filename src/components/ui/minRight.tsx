
type PROPS ={
    iconUrl: string;
    labelText: string;
}
export default function MiniRight({iconUrl, labelText}: PROPS){
    return(
        <div className="flex flex-row items-center justify-center m-2">
                <img 
                src ={iconUrl}
                 alt ="icon"
                 width={20}
                 height={20}
                 />
                <label className="m-2 text-xs text-gray-500">{labelText}</label>
            </div>
    )
}