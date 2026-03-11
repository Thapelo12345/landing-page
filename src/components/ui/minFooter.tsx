
type PROPS  = {
    topLabel: string;
    bottomLabel: string;
}
export default function MiniFooter({topLabel, bottomLabel}: PROPS){
    return(
        <div className="flex flex-col m-2">
            <h1 className="text-white">
              { topLabel}
            </h1>

            <h4 className=" text-gray-500 text-xs">{ bottomLabel }</h4>
        </div>
    )
}