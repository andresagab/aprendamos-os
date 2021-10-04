import React from "react";

const ResourceSubtopic = ({resource}) => {

    return(
        
        <div className="flex flex-row w-80 items-center p-2 space-x-10 rounded-sm hover:bg-gray-100 hover:shadow-sm transition duration-300 ease select-none">
            <img src={resource.img} className="w-16 h-16 bg-gray-300" alt=""/>
            <div className="flex flex-col space-y-2 items-start justify-start">
                <h4 className="font-normal text-md uppercase">{resource.name}</h4>
                <p className="font-normal text-xs text-gray-700">{resource.description}</p>
                <button className="w-14 rounded-full self-end bg-yellow-500 font-normal text-sm text-white hover:bg-yellow-700 transition duration-300 ease select-none">Ver</button>
            </div>
        </div>

    )

}

export default ResourceSubtopic;