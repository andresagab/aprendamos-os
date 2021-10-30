import React from "react";

const WorkArea = (props) =>
{
    
    return (

        <div className="flex w-full h-full m-auto pb-4">
            <div className="flex w-full h-full rounded-lg bg-gray-50 shadow-2xl p-4">
                {props.children}
            </div>
        </div>

    )

}

export default WorkArea;