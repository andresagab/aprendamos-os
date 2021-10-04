import React from "react";
import ResourceSubtopic from "../ResourceSubtopic/ResourceSubtopic";

const SubtopicCard = ({subtopic}) => {

    return(
        
        <div className="flex flex-row rounded-md p-6 bg-white shadow-lg">
            <div className="flex flex-col items-start justify-start space-y-4 pr-14">
                <h3 className="font-normal text-xl text-gray-900 capitalize">{subtopic.title}</h3>
                <p className="font-normal text-sm text-gray-700">{subtopic.long_explanation}</p>
            </div>
            <div className="border-l pl-14 flex flex-col space-y-8">
                {
                    subtopic.resources.map((item) => (
                        <ResourceSubtopic resource={item}/>
                    ))
                }
            </div>
        </div>

    )

}

export default SubtopicCard;