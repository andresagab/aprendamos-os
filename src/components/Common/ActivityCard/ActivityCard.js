import React from "react";

const ActivityCard = ({activity}) => {

    return(
        
        <div className="flex flex-col items-center justify-center rounded-md p-6 space-y-6 bg-white shadow-lg">
            <h3 className="font-normal text-xl text-gray-900 capitalize">{activity.title}</h3>
            <p className="font-normal text-sm text-gray-700 text-center w-3/4">{activity.description}</p>
            <div className="w-full bg-gray-300 h-96 rounded-sm">ACTIVITY IFRAME</div>
        </div>

    )

}

export default ActivityCard;