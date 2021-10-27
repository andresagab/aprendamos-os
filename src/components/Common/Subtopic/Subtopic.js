import React from "react";
import NavSubtopics from "../NavSubtopics/NavSubtopics";
import WorkArea from "../WorkArea/WorkArea";

const Subtopic = ({thematic, subtopic}) => {
    return (
        <div className="flex flex-col w-full h-full">
            {/* sub nav of thematic */}
            <NavSubtopics subtopics={thematic.subtopics}/>
            {/* workarea */}
            <WorkArea>
                <div>default data of subtopic: {subtopic.title}</div>
            </WorkArea>
        </div>
    )
}

export default Subtopic;