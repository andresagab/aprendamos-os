import React from "react";

const WorkArea = (props) =>
{
    
    return (

        <div className="flex w-full h-screen lg:h-full m-auto pb-4">
            <div className="flex w-full h-full rounded-lg bg-white shadow-2xl">
                {props.children}
            </div>
        </div>

    )

}

export default WorkArea;