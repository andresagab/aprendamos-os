import React from "react";
import NavSubtopics from "../NavSubtopics/NavSubtopics";
import SubtopicSlider from "../SubtopicSlider/SubtopicSlider";
import WorkArea from "../WorkArea/WorkArea";

const Subtopic = ({thematic, subtopic}) => {
    return (
        <div className="flex flex-col w-full h-full">
            {/* sub nav of thematic */}
            <NavSubtopics subtopics={thematic.subtopics}/>
            {/* workarea */}
            <WorkArea>
                <SubtopicSlider subtopic={subtopic}/>
            </WorkArea>
        </div>
    )
}

export default Subtopic;