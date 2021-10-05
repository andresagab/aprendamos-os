import React from "react";
import ResourceActivity from "../ResourceActivity/ResourceActivity";

const ActivityCard = ({activity}) => {

    return(
        
        <div className="flex flex-col items-center justify-center rounded-md p-6 space-y-6 bg-white shadow-lg">
            <h3 className="font-normal text-xl text-gray-900 capitalize">{activity.title}</h3>
            <p className="font-normal text-sm text-gray-700 text-center w-3/4">{activity.description}</p>
            <ResourceActivity activity={activity}/>
        </div>

    )

}

export default ActivityCard;