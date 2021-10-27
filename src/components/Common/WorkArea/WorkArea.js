import React from "react";

const WorkArea = (props) =>
{
    
    return (

        <div className="p-4 flex w-full h-full m-auto">
            <div className="flex w-full h-full rounded-lg bg-gray-50 shadow-2xl p-4">
                {props.children}
            </div>
        </div>

    )

}

export default WorkArea;